# esbuild-plugin-autoprefixer

A CSS autoprefixer plugin for esbuild.

---

[![npm](https://img.shields.io/npm/v/@olton/esbuild-plugin-autoprefixer)](https://www.npmjs.com/package/@olton/esbuild-plugin-autoprefixer)
![GitHub](https://img.shields.io/github/license/olton/esbuild-plugin-autoprefixer)

---

## Installation
```bash
npm i -D @olton/esbuild-plugin-autoprefixer
```

## Usage
```js
import { build } from 'esbuild';
import autoprefixer from "@olton/esbuild-plugin-autoprefixer"

await build({
  entryPoints: ...,
  bundle: true,
  outfile: ...,
  plugins: [autoprefixer()],
});
```

---

## License
This software is released under the MIT License.

---

Copyright (c) 2024 by Serhii Pimenov
