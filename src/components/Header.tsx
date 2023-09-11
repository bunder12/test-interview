import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 pt-12">
      <div className="flex gap-4 mb-12">
        <Link href="/">
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
        <span>
          <h4 className="font-bold text-black">Back Home</h4>
        </span>
      </div>
    </div>
  );
};

export default Header;
