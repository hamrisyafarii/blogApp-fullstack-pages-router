import { BlogsType } from "@/types";
import { model, models, Schema } from "mongoose";

const blogSchema = new Schema<BlogsType>(
  {
    title: {
      type: String,
      required: [true, "Judul wajib di isi"],
    },
    description: {
      type: String,
      required: [true, "Deskripsi wajib di isi"],
    },
    imageURL: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const Blog = models.blogs || model<BlogsType>("blogs", blogSchema);
