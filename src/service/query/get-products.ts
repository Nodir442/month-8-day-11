"use server";

import { ProductType } from "../types/products";
const url = process.env.APP_URL;

export const getNotebooks = async (): Promise<ProductType[]> => {
  try {
    const res = await fetch(`${url}/notebook`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
export const getSport = async (): Promise<ProductType[]> => {
  try {
    const res = await fetch(`${url}/sport`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
export const getProductsByCategoryName = async (
  categoryName: string,
): Promise<ProductType[]> => {
  try {
    const res = await fetch(`${url}/${categoryName}`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(`Ошибка при получении данных: ${message}`);
  }
};

export const getProductById = async (id: number): Promise<ProductType> => {
  try {
    const res = await fetch(`${url}/all/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(`Ошибка при загрузке продукта: ${message}`);
  }
};
