const webpack = require("webpack")
const path = require("path")
let entry = "./src/index.js"
let filebundle = "./bundle.js"
let folderpublic = "./public"
let mode = "development"

let config = {
    mode: mode,
    entry: entry,
    output:{
        path: path.resolve(__dirname,folderpublic),
        filename: filebundle
    },
    module: {
    }
}

module.exports = config
