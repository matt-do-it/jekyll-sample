import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [],
    "devCommand": "bundle exec jekyll serve --port {PORT}",
    "postInstallCommand": "npm i --no-save @stackbit/types && gem install jekyll bundler",
    experimental: {
    ssg: {
      name: "jekyll",
      logPatterns: { up: ["Server running"] },
      passthrough: []
    }
  }
})