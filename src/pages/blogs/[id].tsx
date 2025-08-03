/* eslint-disable @typescript-eslint/no-explicit-any */
import { BtnEditDelete } from "@/components/Blogs/BtnEditDelete";
import { DTOBlogs } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingPage from "../loading";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState<DTOBlogs>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) {
          throw new Error("Gagal mengambil data detail blog");
        }
        const data = await res.json();
        setBlog(data.data);
      } catch (error: any) {
        setError(error.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <LoadingPage />;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>Blog tidak ditemukan.</p>;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <Image
            src={blog.imageURL}
            alt="blog images"
            width={500}
            height={300}
          />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <div className="flex justify-between">
              <p className="text-sm text-blue-500 uppercase">category</p>
              <BtnEditDelete blog={blog} />
            </div>

            <div className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
              {blog.title}
            </div>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {blog.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
