import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1001Component } from './page1001.component';
let Page1001Module = class Page1001Module {
};
Page1001Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page1001Component],
        imports: [RouterModule.forChild([{ path: '', component: Page1001Component }])],
        exports: [Page1001Component]
    })
], Page1001Module);
export { Page1001Module };
//# sourceMappingURL=page1001.module.js.map