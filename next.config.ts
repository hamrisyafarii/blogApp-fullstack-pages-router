import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL(
        "https://cdn0.iconfinder.com/data/icons/404-error-page-not-found-illustration-pack/1600/File_Not_Found-512.png"
      ),
      new URL(
        "https://cdn2.iconfinder.com/data/icons/web-design-and-development-47/258/6-128.png"
      ),
      new URL("https://example.com/image.jpg"),
      new URL("http://images"),
    ],
  },
};

export default nextConfig;
