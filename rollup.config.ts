import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default [
	{
		input: "index.ts",
		output: [{ file: "dist/index.js", format: "es" }],
		plugins: [
			typescript({
				tsconfig: "./tsconfig.json",
			}),
		],
	},
	{
		input: "index.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts()],
	},
];
