import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2000Component } from './page2000.component';
let Page2000Module = class Page2000Module {
};
Page2000Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page2000Component],
        imports: [RouterModule.forChild([{ path: '', component: Page2000Component }])],
        exports: [Page2000Component]
    })
], Page2000Module);
export { Page2000Module };
//# sourceMappingURL=page2000.module.js.map