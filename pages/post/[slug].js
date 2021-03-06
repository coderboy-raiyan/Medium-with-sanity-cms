/* eslint-disable @next/next/no-img-element */
import React from "react";
import PortableText from "react-portable-text";
import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import { sanityClient, urlFor } from "../../sanity";

const Post = ({ post }) => {
  console.log(post);

  return (
    <main>
      <Header />

      <img
        className="w-full h-40 object-cover"
        src={urlFor(post?.mainImage).url()}
        alt=""
      />

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
        <h2 className="text-xl font-light text-gray-500 mb-2">
          {post.description}
        </h2>

        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full "
            src={urlFor(post.author.image).url()}
            alt=""
          />
          <p className="font-semibold text-xs text-gray-400">
            Blog post by{" "}
            <span className="text-green-500 ">{post.author.name}</span> -
            published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>

        <div className="mt-8">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={{
              h1: (props) => (
                <h1 className="text-2xl font-bold my-5" {...props} />
              ),
              h2: (props) => (
                <h1 className="text-xl font-bold my-5 " {...props} />
              ),
              li: ({ children }) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }) => (
                <a
                  href={href}
                  className="text-blue-500 hover:underline block my-2"
                >
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>

      <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />

      {/* comments area starts*/}
      <Comments post={post} />

      {/* comments needs to be displayed */}
      <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow">
        <h3 className="text-4xl pb-3">Comments</h3>

        <hr className="pb-2" />
        {post.comments.map((comment) => {
          return (
            <div key={comment._id}>
              <p>
                <span className="text-yellow-500"> {comment.name}</span> :{" "}
                {comment.comment}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export const getStaticPaths = async () => {
  const query = `
    *[_type == "post"]{
        _id,
       slug {
        current
      }
      }
    `;
  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post?.slug?.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
        _id,
       _createdAt,
        title,
        author->{
        name,
        image,
      },
      'comments' : *[
        _type == 'comment' && post._ref == ^._id
        && approved == true
      ],
      description,
      mainImage,
      slug,
      body
        
      }
    `;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 10,
  };
};
export default Post;
