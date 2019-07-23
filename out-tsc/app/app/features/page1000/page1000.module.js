import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1000Component } from './page1000.component';
let Page1000Module = class Page1000Module {
};
Page1000Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page1000Component],
        imports: [RouterModule.forChild([{ path: '', component: Page1000Component }])],
        exports: [Page1000Component]
    })
], Page1000Module);
export { Page1000Module };
//# sourceMappingURL=page1000.module.js.map