import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["public/pages"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "public/pages/{slug}.json",
          fields: [{ name: "title", type: "string", required: true },
                      { name: "content", type: "text", required: true }
]
        },
                {
          name: "People",
          type: "data",
          filePath: "public/data/{slug}.json",
          fields: [
            { name: "title", type: "string", required: true }
          ]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ],
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