import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1200Component } from './page1200.component';
let Page1200Module = class Page1200Module {
};
Page1200Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page1200Component],
        imports: [RouterModule.forChild([{ path: '', component: Page1200Component }])],
        exports: [Page1200Component]
    })
], Page1200Module);
export { Page1200Module };
//# sourceMappingURL=page1200.module.js.map