import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ModalBoxBootstrapComponent } from "./modal-box-bootstrap/modal-box-bootstrap.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "modalwindows/modalboxbootstrap", component: ModalBoxBootstrapComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ModalWindowsRoutingModule { }
