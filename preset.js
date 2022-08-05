const production = require("./preset.production");
const development = require("./preset.development");

module.exports = process.env.NODE_ENV === "production" ? production : development;
