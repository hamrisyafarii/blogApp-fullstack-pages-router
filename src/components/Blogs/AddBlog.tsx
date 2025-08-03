import React, { ReactNode, useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DTOBlogs } from "@/types";

const AddBlog = ({
  title,
  description,
  blog,
  children,
  open,
  setOpen,
}: {
  title: string;
  description: string;
  blog?: DTOBlogs;
  children: ReactNode;
  open?: boolean;
  setOpen?: (value: boolean) => void;
}) => {
  const initialState = {
    title: "",
    description: "",
    imageURL: "",
  };

  const [formData, setFormData] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (blog && open) {
      setFormData({
        title: blog.title ?? "",
        description: blog.description ?? "",
        imageURL: blog.imageURL ?? "",
      });
    }
  }, [blog, open]);

  useEffect(() => {
    if (!blog && open) {
      setFormData(initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blog, open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        blog?._id ? `/api/blogs/${blog._id}` : "/api/blogs",
        {
          method: blog?._id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await res.json();
      if (result?.success) {
        setFormData(initialState);
        setOpen?.(false);
        toast("Berhasil menambahkan blog baru");
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to save blog", error);
    }
  };

  return (
    <div>
      <div onClick={() => setOpen?.(true)}>{children}</div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="imageURL">ImageURL</Label>
                <Input
                  id="imageURL"
                  name="imageURL"
                  value={formData.imageURL}
                  onChange={handleChange}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default AddBlog;
