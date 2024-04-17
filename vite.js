import { build } from "vite";

build({
  build: {
    minify: true,
    format: "iife",
    outDir: "vite",
    lib: {
      name: "test",
      entry: "test.js",
      fileName: () => "bundle.min.js",
      formats: ["iife"],
    },
  },
});

build({
  build: {
    minify: false,
    format: "iife",
    outDir: "vite",
    lib: {
      name: "test",
      entry: "test.js",
      fileName: () => "bundle.js",
      formats: ["iife"],
    },
  },
});
