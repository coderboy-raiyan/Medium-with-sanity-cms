import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-5 justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
          <Link href="/" passHref>
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-44 object-contain cursor-pointer"
              src="https://links.papareact.com/yvf"
              alt="/"
            />
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
            <Link href="/" passHref>
              About
            </Link>
            <Link href="/" passHref>
              Content
            </Link>
            <Link href="/" passHref>
              <a className="bg-green-600 text-white px-4 py-1 rounded-full">
                Follow
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-5 text-green-600">
          <Link href="/" passHref>
            <a>Sign In</a>
          </Link>
          <Link href="/" passHref>
            <a className="text-green-500 border-green-600 px-4 py-1 border rounded-full">
              Get started
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
