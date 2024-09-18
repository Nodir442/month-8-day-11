"use client";
import { useQuery } from "@tanstack/react-query";
import { request } from "./request";

export const useSearch = (value: string) => {
  const shouldFetch = value.length >= 3;

  return useQuery({
    queryKey: ["search", value],
    queryFn: async () => {
      if (shouldFetch) {
        const response = await request.get("/all", { params: { title_like: value } });
        return response.data;
      }
      return [];
    },
    enabled: shouldFetch, 
  });
};
