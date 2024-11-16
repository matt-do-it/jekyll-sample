
export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [],
    "devCommand": "bundle exec jekyll serve --port {PORT}",
    experimental: {
    ssg: {
      name: "jekyll",
      logPatterns: { up: ["Server running"] },
      passthrough: []
    }
  }
})