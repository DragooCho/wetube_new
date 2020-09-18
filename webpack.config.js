const path = require("path");
//path로 컴퓨터나 서버에서 전체경로를 갖게됨
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        test: /\. (scss)$/,
        use: ExtractCSS.extract([
          {
            loader: "css-loder", // webpack이 css를 이해시켜줌
          },
          {
            loader: "postcss-loader", //일반css의 호환성를 해결해줌( ex)IE 호환가능 )
          },
          {
            loader: "scss-loder", // scss를  일반css로 바꿈
          },
        ]),
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]",
  },
};

module.exports = config;
