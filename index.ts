import path from "./path-browserify.js";
import type { Path, PathObject } from "./interfaces.js";

export default path;
export const {
	resolve,
	normalize,
	isAbsolute,
	join,
	relative,
	dirname,
	basename,
	extname,
	format,
	parse,
	fileRoot,
	ext,
	sep,
	delimiter,
	win32,
	posix,
} = path;
export type { Path, PathObject } from "./interfaces.js";
