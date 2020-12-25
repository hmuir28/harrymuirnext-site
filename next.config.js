module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    return config;
  },
  publicRuntimeConfig: {
    NEXT_CONTENTFUL_SPACE_ID: process.env.NEXT_CONTENTFUL_SPACE_ID,
    NEXT_CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  },
};
