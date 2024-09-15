import React from "react";
import Logo from "@/app/icons/logo";
import Search from "./search";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container bg-white my-2 rounded-md">
      <div className="flex items-center justify-between">
        {" "}
        <Link href={""}>
          {" "}
          <Logo />
        </Link>{" "}
        <div className="p-[25px]">
          {" "}
          <Search />
        </div>{" "}
        <div>korzina</div>
      </div>{" "}
    </div>
  );
};

export default Header;
