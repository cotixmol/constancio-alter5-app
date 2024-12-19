import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { loginData } = req.body;

  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username: loginData.username,
      password: loginData.password,
    });

    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default handler;
