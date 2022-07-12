/** @type {import('next').NextConfig} */
module.exports = {
  historyApiFallback: true,
  contentBase: './',
  hot: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/team' : { page: '/team'},
      '/pools' : { page: '/pools'},
      '/pool' : { page: '/pool/[[...tokens]]'},
      '/zap' : { page: '/zap'}
    }
  },
}


