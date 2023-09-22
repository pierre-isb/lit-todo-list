import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "index.js",
  output: {
    file: "build/index.js",
    format: "umd",
  },
  plugins: [commonjs(), resolve()],
});
