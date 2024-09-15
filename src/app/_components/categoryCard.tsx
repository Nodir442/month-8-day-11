import React from "react";
import ArrowRight from "@/app/icons/arrowRight";
import { CategoryCardProps } from "@/service/types/categories";

const CategoryCard: React.FC<CategoryCardProps> = ({ text }) => {
  return (
    <div className="flex w-[210px] justify-between items-center rounded-md px-2 py-[17px] duration-200 hover:shadow-2xl">
      <h3>{text}</h3>
      <ArrowRight />
    </div>
  );
};

export default CategoryCard;
