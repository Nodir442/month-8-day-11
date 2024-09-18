"use client";
import React from "react";
import { ProductCardProps } from "@/service/types/products";
import { useRouter } from "next/navigation";

interface SimpleProductCardProps extends ProductCardProps {
  onSelect: () => void;
}

const SimpleProductCard: React.FC<SimpleProductCardProps> = ({
  title,
  id,
  img,
  onSelect,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${id}`);
    onSelect();
  };

  return (
    <div
      className="z-10 flex w-full cursor-pointer items-center justify-start rounded-md border-[1px] bg-white p-2 duration-200 hover:bg-slate-200 hover:shadow-lg"
      onClick={handleClick}
    >
      <img className="h-[40px] w-[40px] rounded-md" src={img} alt={title} />
      <div className="px-5">
        <h3 className="mb-2 font-bold text-black duration-200 group-hover:text-primary">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default SimpleProductCard;
