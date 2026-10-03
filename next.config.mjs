/** @type {import('next').NextConfig} */
const isStaticExportBuild =
  process.env.EDGEONE === "1" ||
  process.env.CF_PAGES === "1" ||
  process.env.GITHUB_PAGES === "1";

const nextConfig = {
  images: {
    unoptimized: true
  },
  ...(isStaticExportBuild
    ? {
        output: "export",
        trailingSlash: true
      }
    : {})
};

export default nextConfig;
