module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['bing.img.run'], // 允许从该域名加载图片
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