const path = require("path");
console.log("dirname", __dirname);
const dir = path.resolve("dir");
const file = path.resolve("dir/file");
console.log("dir", dir);
console.log("file", file);
console.log("relative", path.relative(dir, file));

