# Bloxd-Bundles
## Intro
This is a repo which I will use to store pre bundled src codes, for fetching in projects like so
## Usage
```js
fetch("https://raw.githubusercontent.com/GlitchHunterCoder/Bloxd-Bundles/refs/heads/main/avsc/index.js")
    .then(e=>e.text())
    .then(e=>eval(e))
```

## Third-party libraries and credits

This project bundles third-party software to make developer tools and libraries available in a browser environment.

All libraries remain the work of their respective authors and contributors. They are included here for convenience and are not claimed as original implementations.

| Library | Project |
|---|---|
| Acorn | Acorn JavaScript Parser |
| avsc | Apache Avro JavaScript implementation |
| Babel | Babel |
| esbuild | esbuild |
| Node.js | Node.js |
| Prettier | Prettier |
| QuickJS | QuickJS |
| SES | Secure ECMAScript (Endo) |
| SQL.js | SQLite compiled to WebAssembly |
| Sval | Sval JavaScript Interpreter |
| Terser | Terser |
| TypeScript | TypeScript |

See the respective upstream projects for their authorship, licensing, and copyright notices.
