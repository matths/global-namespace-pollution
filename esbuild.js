import { build } from "esbuild";

build({
  entryPoints: ["test.js"],
  // bundle: true,
  // format: "iife",
  format: undefined,
  target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
  loader: { ".js": "js" },
  outfile: "esbuild/bundle.js",
  logLevel: "info",
}).catch(() => process.exit(1));
