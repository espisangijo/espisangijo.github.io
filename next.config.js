/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images:{
    loader: 'akamai',
    path: "",
    domains: ['www.gravatar.com', 'localhost', 'www.youtube.com', 'img.youtube.com', 'tailwindui.com'],

  },
  basePath: "",
  assetPrefix: "",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.obj/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'webpack-obj-loader',
        },
      ],
    })

    config.module.rules.push({
      test: /\.(gltf)$/,
      use: [
        {
          loader: "gltf-webpack-loader"
        }
      ]
    })


    config.module.rules.push({
      test: /\.(bin)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    })

    return config
  },
}

module.exports = nextConfig
