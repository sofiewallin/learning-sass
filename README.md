# Learning SASS

A simple website where I play around with CSS animation, learn Sass and where I've also built a structure with webpack for the first time.

This repository is part of a school assignment where I am learning Sass.

## Loaders and plugins I've used in webpack

The loaders and plugins I've used in webpack are the following:

### Loaders: 

- [css-loader](https://webpack.js.org/loaders/css-loader/) for translating CSS into CommonJS.
- [style-loader](https://webpack.js.org/loaders/style-loader/) for creating style nodes from JS strings.
- [sass-loader](https://webpack.js.org/loaders/sass-loader/) for compiling Sass into CSS. This loader depends on [Dart Sass](https://github.com/sass/dart-sass) so that was used as well.
- [webpack-merge](https://www.npmjs.com/package/webpack-merge) for merging `module.exports` in three seperate config files. I use one file for common configs, one for development configs and one for production configs.
- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) and [html-loader](https://webpack.js.org/loaders/html-loader/) for moving, minimizing and handling html files.
- [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/) for extracting CSS into seperate file in production.
- [CssMinimizerPlugin](https://www.npmjs.com/package/css-minimizer-webpack-plugin) for minimizing css.
- [DevServer](https://www.npmjs.com/package/webpack-dev-server) for setting up a development environment and for source mapping.

## How to start up the system

To start up the system and the included loaders and plugins follow these steps:

1. Open a terminal/command prompt
1. Clone the project with `git clone https://github.com/sofiewallin/learning-sass.git`
1. Enter repository and run `npm install`
1. Run development and start live reload in browser with `npm start`
1. Build production folder with `npm run build`

