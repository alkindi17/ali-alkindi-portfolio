const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID_MESSAGE_RECEIVED:
      process.env.EMAILJS_TEMPLATE_ID_MESSAGE_RECEIVED,
    EMAILJS_TEMPLATE_ID_NEW_MESSAGE:
      process.env.EMAILJS_TEMPLATE_ID_NEW_MESSAGE,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  },
};

module.exports = withMDX(nextConfig);
