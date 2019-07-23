import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3000Component } from './page3000.component';
let Page3000Module = class Page3000Module {
};
Page3000Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page3000Component],
        imports: [RouterModule.forChild([{ path: '', component: Page3000Component }])],
        exports: [Page3000Component]
    })
], Page3000Module);
export { Page3000Module };
//# sourceMappingURL=page3000.module.js.map