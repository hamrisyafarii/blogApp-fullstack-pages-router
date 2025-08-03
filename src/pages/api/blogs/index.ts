import { getBlogs, createBlog } from "@/controllers/blog.controller";
import dbConnect from "@/lib/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect(process.env.MONGODB_URI as string);

    if (req.method === "GET") return getBlogs(res);
    if (req.method === "POST") {
      return createBlog(req.body, res);
    }

    res.status(405).json({ success: false, message: "Method Not Allowed" });
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
