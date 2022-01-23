import React from "react";
import { useForm } from "react-hook-form";

const Comments = ({ post }) => {
  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
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
  );
};

export default Comments;
