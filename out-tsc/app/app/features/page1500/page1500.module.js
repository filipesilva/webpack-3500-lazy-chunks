import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1500Component } from './page1500.component';
let Page1500Module = class Page1500Module {
};
Page1500Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page1500Component],
        imports: [RouterModule.forChild([{ path: '', component: Page1500Component }])],
        exports: [Page1500Component]
    })
], Page1500Module);
export { Page1500Module };
//# sourceMappingURL=page1500.module.js.map