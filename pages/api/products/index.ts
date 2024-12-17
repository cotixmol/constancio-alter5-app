import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@/types/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get<{ products: Product[] }>(
      "https://dummyjson.com/products"
    );
    res.status(200).json(response.data);
  } catch {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
