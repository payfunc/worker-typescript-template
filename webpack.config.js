/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path")
const webpack = require("webpack")

const mode = process.env.NODE_ENV || "production"

module.exports = {
	entry: {
		main: "./index.ts",
	},
	output: {
		filename: `worker.${mode}.js`,
		path: path.join(__dirname, "dist"),
	},
	mode,
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		plugins: [],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					transpileOnly: true,
				},
			},
		],
	},
}
