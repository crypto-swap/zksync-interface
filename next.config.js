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
      '/swap/index' : { page: '/swap'},
      '/team/index' : { page: '/team'},
      '/pool/index' : { page: '/pool'},
      '/create/index' : { page: '/pool/create'},
      '/zap/index' : { page: '/pool/zap'},
    }
  },
}


