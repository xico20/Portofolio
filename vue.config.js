
// vue.config.js
const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? '/PortofolioGithubPage/' : '/';

console.log('[vue.config] NODE_ENV =', process.env.NODE_ENV);
console.log('[vue.config] publicPath =', publicPath);

module.exports = {
  publicPath,
  outputDir: 'dist',
};
