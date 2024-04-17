# Global namespace pollution

Please run `npm install` to fetch the necessary dependencies.

## Vite bug reproduction

When running `npm run vite` the source file `test.js` is bundled using Vite (which inside uses esbuild) and the result is written to `vite/bundle.js` or when minified to `vite/bundle.min.js`.

The bug is, that there were helpers added from esbuild outside of the iife and when minified are replaced with short strings or even chars, which might conflict other variables or functions in the global namespace.

Vor example i get this inside `vite/bundle.min.js`:

```javascript
var a = (o, n, t) => (s(o, typeof n != "symbol" ? n + "" : n, t), t);
```

So this might conflict another variable a that was previously declared in the global scope of the same website.

## Esbuild

You can also run `npm run esbuild` to reproduce what is happening inside Vite and it is a matter of configuration.
As described in Vite code comment here: https://github.com/vitejs/vite/blob/5d5508311f9856de69babd72dc4de0e7c21c7ae8/packages/vite/src/node/plugins/esbuild.ts#L281-L290, Vite removes the format config to tell esbuild to not do encapsulate the code inside another IIFE to not be globally scoped.

The call to esbuild from inside èsbuild.js` equals to this CLI call:

`npx esbuild --target=es2020,edge88,firefox78,chrome87,safari14 --platform=browser --loader:.js=js  --supported:dynamic-import=true --supported:import-meta=true --outfile=bundle.js test.js`

esbuild would add an IIFE around when called like this instead:

`npx esbuild --bundle --format=iife --target=es2020,edge88,firefox78,chrome87,safari14 --platform=browser --loader:.js=js  --supported:dynamic-import=true --supported:import-meta=true --outfile=bundle.js test.js`

## Former bugfix / workaround is not working for minified code

There was an issue about this topic already https://github.com/vitejs/vite/issues/11641, but the solution does not work when using `minify: true`. And this workaround is only necessary because Vite configures Esbuild to not open up a new IIFE scope.
