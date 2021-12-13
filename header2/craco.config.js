//craco.config.js
const {
  ChangeJsFilename,
  ChangeCssFilename,
} = require("@navikt/craco-plugins");

module.exports = {
  plugins: [
    {
      plugin: ChangeJsFilename,
      options: {
        filename: "bundle2.js",
        runtimeChunk: false,
        splitChunk: "NO_CHUNKING",
      },
    },
    {
      plugin: ChangeCssFilename,
      options: {
        filename: "bundle2.css",
      },
    },
  ],
};
