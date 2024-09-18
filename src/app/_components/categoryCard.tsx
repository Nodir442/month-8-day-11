"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ArrowRight from "@/app/icons/arrowRight";
import { CategoryCardProps } from "@/service/types/categories";

interface CategoryCardComponentProps extends CategoryCardProps {
  showIcon?: boolean;
}

const CategoryCard: React.FC<CategoryCardComponentProps> = ({
  text,
  name,
  showIcon = true,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/category/${name}`);
  };

  return (
    <div
      className={`flex w-full sm:w-[210px] cursor-pointer items-center rounded-md px-4 py-3 sm:px-2 sm:py-[17px] duration-200 hover:shadow-2xl ${
        showIcon
          ? "justify-between"
          : "justify-center text-center font-semibold"
      }`}
      onClick={handleClick}
    >
      <h3 className="text-sm sm:text-base">{text}</h3>
      {showIcon && <ArrowRight />}
    </div>
  );
};

export default CategoryCard;
