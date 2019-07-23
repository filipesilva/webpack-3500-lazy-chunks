import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3270Component } from './page3270.component';
let Page3270Module = class Page3270Module {
};
Page3270Module = tslib_1.__decorate([
    NgModule({
        declarations: [Page3270Component],
        imports: [RouterModule.forChild([{ path: '', component: Page3270Component }])],
        exports: [Page3270Component]
    })
], Page3270Module);
export { Page3270Module };
//# sourceMappingURL=page3270.module.js.map