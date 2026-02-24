// postcss.config.js (new)
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- Use this instead
    // postcss-import and autoprefixer can often be removed in v4
  },
};
