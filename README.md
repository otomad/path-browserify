# path-browserify-es

[![npm](https://img.shields.io/npm/v/path-browserify-es?logo=npm&logoColor=%23CB3837&label=npm&labelColor=white&color=%23CB3837)](https://www.npmjs.org/package/path-browserify-es)
[![GitHub](https://img.shields.io/npm/v/path-browserify-es?logo=github&label=GitHub&color=%23181717)](https://github.com/otomad/path-browserify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)][license-url]

[license-url]: https://opensource.org/licenses/MIT
[path-url]: https://nodejs.org/docs/v10.3.0/api/path.html

> The `path` module from Node.js for browsers

This implements the Node.js [`path`][path-url] module for environments that do not have it, like browsers.

However, [`path-browserify`](https://github.com/browserify/path-browserify) does not work well with ES Module, for example, you cannot use named imports.

This fork aims to enable `path-browserify` to support the format of ES Module, and additionally add some new methods.

## Installation

```bash
# npm
npm install path-browserify-es

# yarn
yarn add path-browserify-es

# pnpm
pnpm add path-browserify-es
```

### TypeScript

This is already fully TypeScript based, there is no need to install any additional type packages.

## Usage

### Basic Usage

```javascript
import path from "path-browserify-es";

const filename = "logo.png";
const logo = path.join("./assets/img", filename);
document.querySelector("#logo").src = logo;
```

### New Feature: Named Import

You can do it directly like this:

```javascript
import { resolve } from "path-browserify-es";

console.log(resolve("var/lib", "../", "file")); // "var/file"
```

Without:

```javascript
import path from "path-browserify-es";

const { resolve } = path;
console.log(resolve("var/lib", "../", "file")); // "var/file"

// or

console.log(path.resolve("var/lib", "../", "file")); // "var/file"
```

### New Methods

#### `fileRoot`

Get the file name without an extension.

```javascript
console.log(path.basename("path/to/file.txt")); // "file.txt"
console.log(path.fileRoot("path/to/file.txt")); // "file"
```

Before this, you could only achieve it by `parse("path/to/file.txt").name`.

The function name comes from [this post](https://stackoverflow.com/a/2235762/19553213). It mentioned *Vim calls it file root (:help filename-modifiers)*. I used to name it `filenameWithoutExtension`, but it was too long.

#### `ext`

Get the file extension name but without the leading dot.

```javascript
console.log(path.extname("path/to/file.txt")); // ".txt"
console.log(path.ext("path/to/file.txt")); // "txt"
```

I used to name it `extnameWithoutDot`, but it was too long. And it's more commonly used than `extname` method. There is currently no widely accepted consensus on whether the extension needs to include the leading dot. If it's not for compatibility, it's best to rename the function that gets the extension with dot to `dotExtname`.

## API

See the [Node.js path docs][path-url]. `path-browserify` currently matches the Node.js 10.3 API.
`path-browserify` only implements the POSIX functions, not the win32 ones.

## License

path-browserify-es is available under the [MIT License][license-url]. See the LICENSE file for more info.

## References

- [browserify/path-browserify](https://github.com/browserify/path-browserify)
- [path](https://github.com/jinder/path)
