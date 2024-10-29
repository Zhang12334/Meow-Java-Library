module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // 禁用图像优化和域名限制
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};