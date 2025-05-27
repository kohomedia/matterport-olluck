const config = require("./webpack.config.js");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "production",
  optimization: { minimize: true }, // Enable minification
  devtool: undefined, // Disable source maps in production
});
