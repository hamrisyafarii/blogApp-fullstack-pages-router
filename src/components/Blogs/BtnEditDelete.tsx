/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AddBlog from "./AddBlog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, Trash2 } from "lucide-react";
import { DTOBlogs } from "@/types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function BtnEditDelete({ blog }: { blog: DTOBlogs }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const apiResponse = await fetch(`/api/blogs/${blog._id}`, {
        method: "DELETE",
      });
      const result = await apiResponse.json();
      if (result?.success) {
        toast("Berhasil manghapus blog");
        router.push("/blogs");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">. . .</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setOpen(true)}>
              <Edit className="h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete}>
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <AddBlog
        title="Update Blog"
        description="Silahkan update data blog kamu"
        blog={blog}
        open={open}
        setOpen={setOpen}
      >
        <></>
      </AddBlog>
    </>
  );
}
