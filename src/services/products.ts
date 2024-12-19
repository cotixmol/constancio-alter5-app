// services/products.ts
import axios from "axios";
import { Product } from "@/types/products";

const API_BASE_URL = process.env.API_BASE_URL;

export const getProducts = async (): Promise<{ products: Product[] }> => {
  try {
    const token = localStorage.getItem("authToken"); // Retrieve the token

    const response = await axios.get<{ products: Product[] }>(
      `${API_BASE_URL}/api/products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const products = response.data.products.map((product) => ({
      ...product,
      // TODO: See to modify any of the items that comes from the endpoint or just use some.
    }));
    return { products };
  } catch (error) {
    throw error;
  }
};
