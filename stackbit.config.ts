
export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [],
    "devCommand": "gem install jekyll bundler && bundle install && bundle exec jekyll serve --port {PORT}",
    experimental: {
    ssg: {
      name: "jekyll",
      logPatterns: { up: ["Server running"] },
      passthrough: []
    }
  }
})