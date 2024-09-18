"use server";

import React from "react";
import { getProductById } from "@/service/query/get-products";
import { ProductType } from "@/service/types/products";
import { ProductButton } from "@/app/_components/productButton";
import UzbFlag from "@/app/icons/uzb";
import { getCategories } from "@/service/query/get-categories";
import CategoryCard from "@/app/_components/categoryCard";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const productId = parseInt(params.id);
  const categories = await getCategories();
  const product: ProductType = await getProductById(productId);

  const productDetails = [
    { label: "Rangi", value: product.color },
    { label: "Operativ xotira", value: product.ram },
    { label: "Xotira", value: product.rame },
    { label: "Doimiy xotira", value: product.memory },
    { label: "Videokarta", value: product.geForce },
    { label: "Markaziy protsessor", value: product.core },
    { label: "Display", value: product.display || product.details?.display },
    { label: "Og'irlik", value: product.weight || product.details?.weight },
    { label: "Diagonal", value: product.details?.diagonal },
    { label: "Security", value: product.details?.security },
    { label: "Chastota", value: product.details?.frequency },
  ].filter(detail => detail.value);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-wrap gap-4 rounded-lg bg-white py-6 px-4">
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            text={category.text}
            id={category.id}
            name={category.name}
            showIcon={false}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="rounded-lg bg-white p-6 lg:w-[49%]">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="rounded-lg  bg-white p-6 text-center  lg:text-start lg:w-1/2 lg:pl-12">
          <h2 className="mb-4 mt-0 lg:mt-[200px] text-3xl font-bold">{product.title}</h2>
          <p className="mb-3 text-2xl font-bold text-primary">
            {product.price} so'm
          </p>
          <p className="text-xl">
            Maxsulot brendi: <strong>{product.brand}</strong>
          </p>
          <div className="mt-5 lg:w-[240px]">
            <ProductButton />
          </div>
          <div className="mt-5 flex items-center rounded-xl bg-primary/10 p-3">
            <UzbFlag />
            <p className="ml-3 font-bold">
              O’zbekiston bo’ylab yetkazib berish:
            </p>
            <p>14 ish kuni</p>
          </div>
        </div>
      </div>
      <div className="container my-6 rounded-lg bg-white">
        {productDetails.map((detail, index) => (
          <div
            key={index}
            className={`flex items-center p-3 ${
              index !== productDetails.length - 1 ? "border-b-2 border-dashed" : ""
            }`}
          >
            <p className="w-1/2 font-medium text-gray-600">{detail.label}:</p>
            <p className="text-xl font-semibold">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
