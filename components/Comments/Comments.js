import React from "react";

const Comments = () => {
  return (
    <from className="flex flex-col max-w-2xl mx-auto mb-10">
      <h3 className="text-sm text-yellow-500 ">Enjoyed this article?</h3>
      <h4 className="text-3xl font-bold">Leave a comment below</h4>
      <hr className="py-3 mt-2" />

      <label className="block mb-5" htmlFor="">
        <span>Name</span>
        <input
          className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring-yellow-500 focus:ring"
          placeholder="Sony Sanga"
          type="text"
        />
      </label>
      <label className="block mb-5" htmlFor="">
        <span>Email</span>
        <input
          className="shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring-yellow-500 focus:ring"
          placeholder="Email"
          type="email"
        />
      </label>
      <label className="block mb-5" htmlFor="">
        <span>Comment</span>
        <textarea
          className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none focus:ring-yellow-500 focus:ring"
          row={8}
          placeholder="Comment"
        />
      </label>
    </from>
  );
};

export default Comments;
