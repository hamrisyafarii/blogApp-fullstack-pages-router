import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DTOBlogs } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface blogProps {
  blog: DTOBlogs;
}

const BlogItem = ({ blog }: blogProps) => {
  return (
    <Card>
      <CardHeader>
        <Image
          className="object-fill h-48 w-96"
          src={blog.imageURL}
          alt={blog.title}
          height={300}
          width={500}
        />
      </CardHeader>
      <CardContent>
        <div className="p-2 bg-slate-400 mx-2 text-center">
          <CardTitle className="flex items-center">{blog.title}</CardTitle>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-4">
          <CardDescription>{blog.description.slice(0, 25)}</CardDescription>
          <Link href={`/blogs/${blog._id}`}>
            <Button variant={"outline"}>Read More</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
export default BlogItem;
