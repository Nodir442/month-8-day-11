"use client"
import { Input } from "@/components/ui/input";
import SearchIcon from "@/app/icons/search";
export default function Search() {
  return (
    <div className="flex w-[888px] items-center space-x-2 rounded-lg border-[2px] border-primary bg-gray-50 px-3.5 py-2 dark:bg-gray-900">
      <SearchIcon />
      <Input
        type="search"
        placeholder="Qidirish"
        className="h-8 w-full border-0 font-semibold"
      />
    </div>
  );
}
