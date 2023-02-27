const path = require('path');

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@assets': resolvePath('./src/assets'),
      '@components': resolvePath('./src/components'),
      '@utils': resolvePath('./src/utils'),
      '@hooks': resolvePath('./src/hooks'),
      '@pages': resolvePath('./src/pages'),
      '@layouts': resolvePath('./src/layouts'),
      '@redux': resolvePath('./src/redux'),
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
};
