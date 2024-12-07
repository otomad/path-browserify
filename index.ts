import path from "./path-browserify";

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
	filenameWithoutExtension,
	sep,
	delimiter,
	win32,
	posix,
} = path;
