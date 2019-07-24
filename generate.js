const { writeFileSync } = require('fs');

const nonLazyModules = Array.apply(null, new Array(3500))
  .map((v, i) => `${i+1}`.padStart(4, '0'))
  .map(i => `import { Page${i}Module } from './features/page${i}/page${i}.module';`);

const str = `
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
${nonLazyModules.join('\n')}
const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };  
`;

writeFileSync('./out-tsc/app/app/app-routing-non-lazy.module.js', str);
