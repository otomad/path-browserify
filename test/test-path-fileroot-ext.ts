import tape from "tape";
import path from "..";

tape("path.fileRoot", (t) => {
	t.strictEqual(path.basename("/dir/basename.js"), "basename.js");
	t.strictEqual(path.basename("/dir/basename.min.js"), "basename.min.js");
	t.strictEqual(path.fileRoot("/dir/basename.js"), "basename");
	t.strictEqual(path.fileRoot("/dir/basename.min.js"), "basename.min");
	t.end();
});

tape("path.ext", (t) => {
	t.strictEqual(path.extname("/dir/basename.js"), ".js");
	t.strictEqual(path.extname("/dir/basename.min.js"), ".js");
	t.strictEqual(path.ext("/dir/basename.js"), "js");
	t.strictEqual(path.ext("/dir/basename.min.js"), "js");
	t.end();
});
