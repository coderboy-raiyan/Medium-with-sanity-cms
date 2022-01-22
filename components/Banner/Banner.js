import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black px-10 lg:py-0 md:py-10">
      <div className="space-y-4">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{" "}
          is a place to write, read, and connect
        </h1>
        <h2 className="w-2/3">
          Its easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://i.postimg.cc/W4yLkMKz/2582607.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
