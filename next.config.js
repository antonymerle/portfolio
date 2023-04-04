/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate();
