"use server";

import { categoryType } from "../types/categories";

const url = process.env.APP_URL;

export const getCategories = async (): Promise<categoryType[]> => {
  try {
    const res = await fetch(`${url}/catalog`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
