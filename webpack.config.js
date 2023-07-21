const path = require("path");
const WebpackObfuscator = require("webpack-obfuscator");

module.exports = {
  entry: {
    main: "./src/main.js",
    serviceWorker: "./src/serviceWorker.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new WebpackObfuscator(
      {
        rotateStringArray: true,
        target: "service-worker",
      },
      ["main.js"]
    ),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8001,
  },
};
