import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1600Component } from './page1600.component';
let Page1600Module = class Page1600Module {
};
Page1600Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page1600Component],
        imports: [RouterModule.forChild([{ path: '', component: Page1600Component }])],
        exports: [Page1600Component]
    })
], Page1600Module);
export { Page1600Module };
//# sourceMappingURL=page1600.module.js.map