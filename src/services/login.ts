import axios from "axios";
import { loginData } from "@/types/login";

const API_BASE_URL = process.env.API_BASE_URL;

export const login = async (loginData: loginData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/user/login`,
      {
        loginData: loginData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = response.data.accessToken;
    localStorage.setItem("authToken", token);

    return response;
  } catch (error) {
    throw error;
  }
};
