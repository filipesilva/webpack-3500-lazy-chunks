# webpack-3500-lazy-chunks

When using `webpack@4.36.1`, having many lazy chunks slows down rebuilds.

To repro follow these steps:
- `npm install`
- `npm run watch` and wait for the first build
- open `./out-tsc/app/app/app.module.ts`
- add another `console.log(1);` to the end of the file and save
- the rebuild will take ~9s and emit only `main.js` and `main.js.map`
- progress report shows most of the time is spent in `content hashing JavascriptModulesPlugin` and `after chunk asset optimization SourceMapDevtoolPlugin`
- save the file without changes to trigger a similar long rebuild
- remove the `import { AppRoutingModule } from './app-routing.module';` line and save
- the rebuild now takes ~700ms

