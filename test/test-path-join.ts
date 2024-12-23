import tape from "tape";
import path from "../";

const backslashRE = /\\/g;

const joinTests: [string[], string][] =
	// arguments                     result
	[
		[[".", "x/b", "..", "/b/c.js"], "x/b/c.js"],
		[[], "."],
		[["/.", "x/b", "..", "/b/c.js"], "/x/b/c.js"],
		[["/foo", "../../../bar"], "/bar"],
		[["foo", "../../../bar"], "../../bar"],
		[["foo/", "../../../bar"], "../../bar"],
		[["foo/x", "../../../bar"], "../bar"],
		[["foo/x", "./bar"], "foo/x/bar"],
		[["foo/x/", "./bar"], "foo/x/bar"],
		[["foo/x/", ".", "bar"], "foo/x/bar"],
		[["./"], "./"],
		[[".", "./"], "./"],
		[[".", ".", "."], "."],
		[[".", "./", "."], "."],
		[[".", "/./", "."], "."],
		[[".", "/////./", "."], "."],
		[["."], "."],
		[["", "."], "."],
		[["", "foo"], "foo"],
		[["foo", "/bar"], "foo/bar"],
		[["", "/foo"], "/foo"],
		[["", "", "/foo"], "/foo"],
		[["", "", "foo"], "foo"],
		[["foo", ""], "foo"],
		[["foo/", ""], "foo/"],
		[["foo", "", "/bar"], "foo/bar"],
		[["./", "..", "/foo"], "../foo"],
		[["./", "..", "..", "/foo"], "../../foo"],
		[[".", "..", "..", "/foo"], "../../foo"],
		[["", "..", "..", "/foo"], "../../foo"],
		[["/"], "/"],
		[["/", "."], "/"],
		[["/", ".."], "/"],
		[["/", "..", ".."], "/"],
		[[""], "."],
		[["", ""], "."],
		[[" /foo"], " /foo"],
		[[" ", "foo"], " /foo"],
		[[" ", "."], " "],
		[[" ", "/"], " /"],
		[[" ", ""], " "],
		[["/", "foo"], "/foo"],
		[["/", "/foo"], "/foo"],
		[["/", "//foo"], "/foo"],
		[["/", "", "/foo"], "/foo"],
		[["", "/", "foo"], "/foo"],
		[["", "/", "/foo"], "/foo"],
	];

// Windows-specific join tests
const windowsJoinTests = [
	// arguments                     result
	// UNC path expected
	[["//foo/bar"], "\\\\foo\\bar\\"],
	[["\\/foo/bar"], "\\\\foo\\bar\\"],
	[["\\\\foo/bar"], "\\\\foo\\bar\\"],
	// UNC path expected - server and share separate
	[["//foo", "bar"], "\\\\foo\\bar\\"],
	[["//foo/", "bar"], "\\\\foo\\bar\\"],
	[["//foo", "/bar"], "\\\\foo\\bar\\"],
	// UNC path expected - questionable
	[["//foo", "", "bar"], "\\\\foo\\bar\\"],
	[["//foo/", "", "bar"], "\\\\foo\\bar\\"],
	[["//foo/", "", "/bar"], "\\\\foo\\bar\\"],
	// UNC path expected - even more questionable
	[["", "//foo", "bar"], "\\\\foo\\bar\\"],
	[["", "//foo/", "bar"], "\\\\foo\\bar\\"],
	[["", "//foo/", "/bar"], "\\\\foo\\bar\\"],
	// No UNC path expected (no double slash in first component)
	[["\\", "foo/bar"], "\\foo\\bar"],
	[["\\", "/foo/bar"], "\\foo\\bar"],
	[["", "/", "/foo/bar"], "\\foo\\bar"],
	// No UNC path expected (no non-slashes in first component -
	// questionable)
	[["//", "foo/bar"], "\\foo\\bar"],
	[["//", "/foo/bar"], "\\foo\\bar"],
	[["\\\\", "/", "/foo/bar"], "\\foo\\bar"],
	[["//"], "/"],
	// No UNC path expected (share name missing - questionable).
	[["//foo"], "\\foo"],
	[["//foo/"], "\\foo\\"],
	[["//foo", "/"], "\\foo\\"],
	[["//foo", "", "/"], "\\foo\\"],
	// No UNC path expected (too many leading slashes - questionable)
	[["///foo/bar"], "\\foo\\bar"],
	[["////foo", "bar"], "\\foo\\bar"],
	[["\\\\\\/foo/bar"], "\\foo\\bar"],
	// Drive-relative vs drive-absolute paths. This merely describes the
	// status quo, rather than being obviously right
	[["c:"], "c:."],
	[["c:."], "c:."],
	[["c:", ""], "c:."],
	[["", "c:"], "c:."],
	[["c:.", "/"], "c:.\\"],
	[["c:.", "file"], "c:file"],
	[["c:", "/"], "c:\\"],
	[["c:", "file"], "c:\\file"],
];

tape("path.posix.join", (t) => {
	joinTests.forEach((p) => {
		const actual = path.posix.join.apply(null, p[0]);
		t.strictEqual(actual, p[1]);
	});
	t.end();
});

// tape("path.win32.join", { skip: true }, t => {
// 	joinTests.forEach(p => {
// 		const actual = path.win32.join
// 			.apply(null, p[0])
// 			.replace(backslashRE, "/");
// 		t.strictEqual(actual, p[1]);
// 	});
// 	windowsJoinTests.forEach(p => {
// 		const actual = path.win32.join.apply(null, p[0]);
// 		t.strictEqual(actual, p[1]);
// 	});
// 	t.end();
// });
