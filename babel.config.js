module.exports = {
  env: {
    test: {
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
    },
  },
}