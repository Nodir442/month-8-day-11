"use client";
import React from "react";
import Logo from "../icons/logo";
import GooglePlay from "@/app/icons/googlePlay";
import AppStore from "@/app/icons/appStore";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-5 w-full bg-white">
      <div className="container py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Logo and Information Section */}
          <div className="mb-6 md:mb-0">
            <Link href={"/"}>
              <Logo width={165} height={45} />
            </Link>
            <p className="mt-6 text-xl font-semibold">Mobilux © 2022</p>
            <p className="font-medium">Barcha huquqlar kafolatlangan</p>
            <div className="mt-4 flex gap-3">
              <GooglePlay />
              <AppStore />
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="mb-4 text-xl font-semibold">Foydali havolalar</h3>
            <p className="mb-1 cursor-pointer text-sm">Bosh sahifa</p>
            <p className="mb-1 cursor-pointer text-sm">Yordam kerakmi?</p>
            <p className="mb-1 cursor-pointer text-sm">Foydalanish shartlari</p>
            <p className="mb-1 cursor-pointer text-sm">Maxfiylik siyosati</p>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Biz haqimizda</h3>
            <p className="mb-1 cursor-pointer text-sm">
              Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul,
              03113, Crescent Trade ltd
            </p>
            <p className="mb-1 cursor-pointer text-sm">
              Korxona nomi: Mobilux trade
            </p>
            <p className="mb-1 cursor-pointer text-sm">
              Korxona rahbari: HASANBOY TURSUNOV
            </p>
            <p className="mb-1 cursor-pointer text-sm">
              Registratsiya raqami: 433-62-00377
            </p>
            <p className="mb-1 cursor-pointer text-sm">
              Telefon raqam: 93 000 66-44
              <span className="ml-1">97 000 66-44</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
