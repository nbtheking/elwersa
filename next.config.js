/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_ANALYTICS_ID: "G-7WMGE1XZT4",
    BASE_ID: "AIzaSyBl-3nMUnxmPctmzdSOv7dXIGbfwzptN1Y",
  },
  images: {
    domains: ["elwersa-8a62d.appspot.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
