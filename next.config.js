/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs buffer util",
    });

    return config;
  },
  images: {
    domains: ["utfs.io"],
  },
};

module.exports = nextConfig;
