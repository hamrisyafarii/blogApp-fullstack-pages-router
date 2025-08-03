import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { usePathname } from "next/navigation";
import AddBlog from "../Blogs/AddBlog";
import { Button } from "../ui/button";
import { useState } from "react";

const navbar = [
  { name: "Blogs", path: "/blogs" },
  { name: "Category", path: "/category" },
  { name: "Articles", path: "/aricles" },
  { name: "News", path: "/news" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive =
    "text-foreground transition hover:text-foreground/75 border-b-3 border-chart-2";
  const active = "text-foreground transition hover:text-foreground/75";
  return (
    <header className="bg-background border">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          Logo
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navbar.map((nav, index) => (
                <li key={index}>
                  <Link
                    className={pathname === nav.path ? isActive : active}
                    href={nav.path}
                    aria-current="page"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div>
                <ModeToggle />
              </div>
              <AddBlog
                title="Tambah Blog Baru"
                description="Ini deskripsi"
                open={open}
                setOpen={setOpen}
              >
                <Button onClick={() => setOpen(true)}>+ Blog</Button>
              </AddBlog>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
