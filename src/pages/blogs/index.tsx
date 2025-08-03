/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogList from "@/components/Blogs/BlogList";
import { DTOBlogs } from "@/types";
import { useEffect, useState } from "react";
import LoadingPage from "../loading";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<DTOBlogs[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const data = await res.json();
        setBlogs(data.data);
      } catch (error: any) {
        console.log("Error fetch data blogs", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <LoadingPage />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  );
};
export default BlogPage;
