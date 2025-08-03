import { DTOBlogs } from "@/types";
import BlogItem from "./BlogItem";

interface CardBlogProps {
  blogs: DTOBlogs[];
}

const BlogList = ({ blogs }: CardBlogProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog._id}>
            <BlogItem blog={blog} />
          </div>
        ))
      ) : (
        <div>Tidak ada blog tersedia</div>
      )}
    </div>
  );
};
export default BlogList;
