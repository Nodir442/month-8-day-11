"use client";
import React from "react";
import Logo from "@/app/icons/logo";
import Search from "./search";
import Link from "next/link";
import Shopping from "../icons/shopping";

const Header = () => {
  return (
    <div className="mb-2 bg-white">
      <div className="container flex items-center justify-between flex-wrap">
        <Link className="p-4" href={"/"}>
          <Logo width={116} height={28} />
        </Link>
        <div className="p-[25px] flex-1">
          <Search />
        </div>
        <div className="flex items-center gap-2">
          <p className="mt-1 text-sm">0</p>
          <Shopping />
        </div>
      </div>
    </div>
  );
};

export default Header;
