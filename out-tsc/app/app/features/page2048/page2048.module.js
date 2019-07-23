import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2048Component } from './page2048.component';
let Page2048Module = class Page2048Module {
};
Page2048Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page2048Component],
        imports: [RouterModule.forChild([{ path: '', component: Page2048Component }])],
        exports: [Page2048Component]
    })
], Page2048Module);
export { Page2048Module };
//# sourceMappingURL=page2048.module.js.map