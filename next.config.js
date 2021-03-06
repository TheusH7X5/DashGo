module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
