import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1337Component } from './page1337.component';
let Page1337Module = class Page1337Module {
};
Page1337Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page1337Component],
        imports: [RouterModule.forChild([{ path: '', component: Page1337Component }])],
        exports: [Page1337Component]
    })
], Page1337Module);
export { Page1337Module };
//# sourceMappingURL=page1337.module.js.map