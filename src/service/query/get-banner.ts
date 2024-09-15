"use server";

import { BannerType } from "../types/banner";
const url = process.env.APP_URL;

export const getBanners = async (): Promise<BannerType[]> => {
  try {
    const res = await fetch(`${url}/banners`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
