"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ProductType } from "@/service/types/products";
import Stars from "@/app/icons/stars";
import { ProductButton } from "./productButton";

const ProductCard: React.FC<ProductType> = ({ title, img, price, id }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div
      className="group w-full sm:w-[262px] cursor-pointer rounded-md bg-white pb-4 duration-200 hover:shadow-lg"
      onClick={handleClick}
    >
      <img
        className="h-[200px] w-full sm:h-[262px] sm:w-[262px] rounded-md object-cover"
        src={img}
        alt="Product Image"
      />
      <div className="my-2 px-4 sm:px-[18px]">
        <h3 className="mb-2 text-black duration-200 group-hover:text-primary text-sm sm:text-base">
          {title}
        </h3>
        <Stars />
        <p className="my-2 text-lg font-extrabold">{price} so'm</p>
        <ProductButton />
      </div>
    </div>
  );
};

export default ProductCard;
