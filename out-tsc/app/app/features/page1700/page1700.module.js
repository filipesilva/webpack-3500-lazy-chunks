import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1700Component } from './page1700.component';
let Page1700Module = class Page1700Module {
};
Page1700Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page1700Component],
        imports: [RouterModule.forChild([{ path: '', component: Page1700Component }])],
        exports: [Page1700Component]
    })
], Page1700Module);
export { Page1700Module };
//# sourceMappingURL=page1700.module.js.map