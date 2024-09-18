"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/app/icons/search";
import useDebounce from "../hooks/useDebaunce";
import { useSearch } from "@/service/query/useSearch";
import SimpleProductCard from "./simpleProductCard";
import { ProductCardProps } from "@/service/types/products";

export default function Search() {
  const [inputValue, setInputValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue);
  const { data: products, isLoading, isError } = useSearch(debouncedValue);

  const handleProductSelect = () => {
    setInputValue("");
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center space-x-2 rounded-lg border-[2px] border-primary bg-gray-50 px-3.5 py-2 dark:bg-gray-900">
        <SearchIcon />
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="search"
          placeholder="Qidirish"
          className="h-8 w-full border-0 font-semibold"
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Ошибка загрузки данных</p>}
      {products && (
        <div className="absolute mt-1 flex w-full flex-col bg-white">
          {products.map((product: ProductCardProps) => (
            <SimpleProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              onSelect={handleProductSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
