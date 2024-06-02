const path = require("node:path");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
};
