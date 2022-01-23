import sanityClient from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
};

const client = sanityClient(config);

export default async function createComment(req, res) {
  const { _id, name, email, comment } = req.body;

  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (err) {
    res.status(500).json({ message: "comment couldn't be send" });
  }
  res.status(200).json({ message: "Comment created successfully" });

  console.log(req.body);
}
