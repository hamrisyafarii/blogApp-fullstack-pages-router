import {
  getBlogById,
  updateBlog,
  deleteBlog,
} from "@/controllers/blog.controller";
import dbConnect from "@/lib/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect(process.env.MONGODB_URI as string);

  if (req.method === "GET") return getBlogById(req, res);
  if (req.method === "PUT") return updateBlog(req, res);
  if (req.method === "DELETE") return deleteBlog(req, res);

  res.status(405).json({ success: false, message: "Method Not Allowed" });
}
