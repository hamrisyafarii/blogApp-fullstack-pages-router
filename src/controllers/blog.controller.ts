import { Blog } from "@/models/blog.model";
import { NextApiRequest, NextApiResponse } from "next";

export const getBlogs = async (res: NextApiResponse) => {
  const blogs = await Blog.find();
  res.status(200).json({ success: true, data: blogs });
};

export const createBlog = async (
  body: { title: string; description: string; imageURL: string },
  res: NextApiResponse
) => {
  try {
    const { title, description, imageURL } = body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ success: false, message: "Title & description required" });
    }

    const newBlog = await Blog.create({ title, description, imageURL });
    res.status(201).json({
      success: true,
      message: "Berhasil menambahkan blog baru",
      data: newBlog,
    });
  } catch (error) {
    console.error("Error in createBlog:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getBlogById = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query;
  const blog = await Blog.findById(id);
  if (!blog)
    return res.status(404).json({ success: false, message: "Blog not found" });
  res.status(200).json({ success: true, data: blog });
};

export const updateBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { title, description, imageURL } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ success: false, message: "Title & description required" });
  }

  const updated = await Blog.findByIdAndUpdate(
    id,
    { title, description, imageURL },
    { new: true }
  );

  if (!updated) {
    return res.status(404).json({ success: false, message: "Blog not found" });
  }

  res.status(200).json({ success: true, data: updated });
};

export const deleteBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const deleted = await Blog.findByIdAndDelete(id);
  if (!deleted)
    return res.status(404).json({ success: false, message: "Blog not found" });

  res.status(200).json({ success: true, message: "Blog deleted successfully" });
};
