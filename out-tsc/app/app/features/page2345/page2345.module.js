import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2345Component } from './page2345.component';
let Page2345Module = class Page2345Module {
};
Page2345Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page2345Component],
        imports: [RouterModule.forChild([{ path: '', component: Page2345Component }])],
        exports: [Page2345Component]
    })
], Page2345Module);
export { Page2345Module };
//# sourceMappingURL=page2345.module.js.map