export default function watchTransform (options = {}) {
  return {
    name: "watch-transform",
    transform (code, id) {
      const files = options.files || []
      files.forEach(file => this.addWatchFile(file))
    }
  }
}
