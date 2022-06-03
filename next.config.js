/** @type {import('next').NextConfig} */
module.exports = {
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
      '/swap' : { page: '/swap/[[...tokens]]'},
      '/team' : { page: '/team'},
      '/pool' : { page: '/pool'},
      '/add' : { page: '/add/[[...tokens]]'},
      '/zap' : { page: '/zap'}
    }
  },
}


