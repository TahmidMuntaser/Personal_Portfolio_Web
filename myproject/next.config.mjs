/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs (ESM)
export default {
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
    pagesBufferLength: 2,
  },
};




