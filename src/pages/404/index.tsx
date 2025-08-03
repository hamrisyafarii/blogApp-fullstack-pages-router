import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center w-10/12 m-auto">
      <div className="hidden md:flex md:w-1/2 p-8">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/404-error-page-not-found-illustration-pack/1600/File_Not_Found-512.png"
          alt="Not found"
          width={500}
          height={300}
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          404 Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          href="/blogs"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
