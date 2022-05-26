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
      '/swap' : { page: '/swap'},
      '/team' : { page: '/team'},
      '/pool' : { page: '/pool'},
      'pool/create' : { page: '/create'},
      'pool/zap' : { page: '/zap' }
    }
  },
}
