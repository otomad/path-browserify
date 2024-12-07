import tape from "tape";
import path from "../";

tape("path.basename", (t) => {
	t.strictEqual(path.basename("/dir/basename.js"), "basename.js");
	t.strictEqual(path.basename("/dir/basename.min.js"), "basename.min.js");
	t.strictEqual(
		path.filenameWithoutExtension("/dir/basename.js"),
		"basename",
	);
	t.strictEqual(
		path.filenameWithoutExtension("/dir/basename.min.js"),
		"basename.min",
	);
	t.strictEqual(path.extname("/dir/basename.js"), ".js");
	t.strictEqual(path.extname("/dir/basename.min.js"), ".js");
	t.strictEqual(path.extnameWithoutDot("/dir/basename.js"), "js");
	t.strictEqual(path.extnameWithoutDot("/dir/basename.min.js"), "js");
	t.end();
});
