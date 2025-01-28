/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "development" ? "" : "/timeboxing-app",
};

export default nextConfig;
