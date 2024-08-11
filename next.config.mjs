// next.config.js
const nextConfig = {
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
    return config;
  },
};

export default nextConfig;
