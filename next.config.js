// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// if (typeof require !== "undefined") {
//   // require.extensions[".less"] = () => {};
//   require.extensions[".css"] = (module) => module;
// }

// require('dotenv').config()

// const path = require('path')
// const Dotenv = require('dotenv-webpack')

module.exports = {
  // cssModules: false,
  // useFileSystemPublicRoutes: false,
  // images: {
  //   domains: ['dp6t2sz71u1u6.cloudfront.net'],
  // },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|eot|ttf|mp4|webm)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        }
      }
    })

    // if (config.mode === 'production') {
    //   if (Array.isArray(config.optimization.minimizer)) {
    //     config.optimization.minimizer.push(
    //       new OptimizeCSSAssetsPlugin({
    //         cssProcessorPluginOptions: {
    //           preset: ['default', { discardComments: { removeAll: true } }],
    //         },
    //         canPrint: true
    //       })
    //     )
    //   }
    // }

    // config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    // config.resolve.alias['store'] = path.join(__dirname, 'store');
    // config.resolve.alias['theme'] = path.join(__dirname, 'src/theme');
    // config.resolve.alias['models'] = path.join(__dirname, 'src/models');

    // config.plugins = config.plugins || []

    // config.plugins = [
    //   ...config.plugins,

    //   // Read the .env file
    //   new Dotenv({
    //     // path: path.join(__dirname, '.env'),
    //     systemvars: true
    //   })
    // ]
    return config;
  }
};