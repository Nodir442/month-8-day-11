import React from "react";
import CategoryCard from "@/app/_components/categoryCard";
import ProductCard from "@/app/_components/productCard";
import { getCategories } from "@/service/query/get-categories";
import { getProductsByCategoryName } from "@/service/query/get-products";

export default async function CategoryPage({
  params,
}: {
  params: { name: string };
}) {
  const products = await getProductsByCategoryName(params.name);
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-wrap gap-4 rounded-lg bg-white py-6 px-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            text={category.text}
            id={category.id}
            name={category.name}
            showIcon={false}
          />
        ))}
      </div>
      <h1 className="mb-6 text-2xl font-bold container">
        Товары категории: {params.name}
      </h1>
      <div className="flex container flex-wrap gap-3">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              id={product.id}
              brand={product.brand}
            />
          ))
        ) : (
          <p>Товары не найдены для категории {params.name}</p>
        )}
      </div>
    </div>
  );
}
