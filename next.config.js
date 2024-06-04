//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { composePlugins, withNx } = require('@nx/next');

const nextConfig = {
  experimental: {
    outputFileTracingRoot: __dirname
  },
};

// const plugins = [
//   // Add more Next.js plugins to this list if needed.
//   withNx,
// ];

// module.exports = composePlugins(...plugins)(nextConfig);
module.exports = nextConfig
