import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1234Component } from './page1234.component';
let Page1234Module = class Page1234Module {
};
Page1234Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page1234Component],
        imports: [RouterModule.forChild([{ path: '', component: Page1234Component }])],
        exports: [Page1234Component]
    })
], Page1234Module);
export { Page1234Module };
//# sourceMappingURL=page1234.module.js.map