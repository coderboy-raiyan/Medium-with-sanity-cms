import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { sanityClient } from "../sanity";
import Banner from "./../components/Banner/Banner";
import Posts from "./../components/Posts/Posts";

export default function Home({ posts }) {
  return (
    <div className="">
      <Head>
        <title>Medium 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header starts*/}
      <Header />
      {/* main starts here */}
      <main>
        <Banner />

        {/* posts */}
        <div className="pt-6 pb-20">
          <Posts posts={posts} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = `*[_type == "post"]{
    _id,
    title,
    author ->{
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
}
