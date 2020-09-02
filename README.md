# rollup-plugin-transform-watch

Watches transformed files.

Uses [addWatchFile](https://rollupjs.org/guide/en/#thisaddwatchfileid-string--void) to add additional files to be monitored in watch mode so that changes to these files will trigger rebuilds.

```
import watch from "rollup-plugin-watch-transform"

export default {
  input: "src/index.js",
  output: "dist/index.js",
  plugins: [
    watch({
      files: ["src/scss"]
    })
  ]
}
```
