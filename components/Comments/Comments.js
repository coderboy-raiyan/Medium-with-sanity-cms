import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    0: "#fd1d1d",
    "1.0": "#fd1d1d",
  },
});

const Comments = ({ post }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    fetch("/api/createComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmitted(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });

    reset();
  };
  return (
    <>
      {loading ? (
        <h1>
          <TopBarProgress />
        </h1>
      ) : submitted ? (
        <div className="flex rounded shadow-xl flex-col p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold">
            Thanks for submit your valuable feedback!
          </h1>
          <p>Once it has been approved, it will appear below</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col lg:max-w-2xl lg:mx-auto md:max-w-2xl md:mx-auto mb-10 mx-4"
        >
          <h3 className="text-sm text-yellow-500 ">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below</h4>
          <hr className="py-3 mt-2" />

          <input type="hidden" value={post._id} {...register("_id")} />

          <label className="block mb-5" htmlFor="">
            <span>Name</span>
            <input
              {...register("name")}
              required
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring-yellow-500 focus:ring"
              placeholder="Sony Sanga"
              type="text"
            />
          </label>
          <label className="block mb-5" htmlFor="">
            <span>Email</span>
            <input
              {...register("email")}
              required
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring-yellow-500 focus:ring"
              placeholder="Email"
              type="email"
            />
          </label>
          <label className="block mb-5" htmlFor="">
            <span>Comment</span>
            <textarea
              {...register("comment")}
              required
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none focus:ring-yellow-500 focus:ring h-40"
              row={8}
              placeholder="Comment"
            />
          </label>

          <div>
            <button className="shadow-lg bg-yellow-500 py-2 w-full block rounded text-white hover:bg-yellow-600">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Comments;
