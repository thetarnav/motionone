const { createDistBuild, createSizeBuild } = require("config/rollup.config")
const pkg = require("./package.json")

module.exports = createDistBuild(pkg)
