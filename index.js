const path = require("path");
console.log("dirname", __dirname);
/*
const dir = path.resolve("dir");
const file = path.resolve("dir/file");
console.log("dir", dir);
console.log("file", file);
console.log("relative", path.relative(dir, file));
*/

const webpack = require("webpack");

webpack({
  entry:"./entry.js",
  output:{
    path:path.resolve(__dirname, "dist"),
    filename:"[name].bundle.js",
  }
}, (err, stats) => {
  console.log(err);
  const root = stats.compilation.options.context;
  console.log("context", root);
  const file = path.resolve(__dirname, "./a");
  console.log("file", file);
  console.log("relative", path.relative(root, file));
})
