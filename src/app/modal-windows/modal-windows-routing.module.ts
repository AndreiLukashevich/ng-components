import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ModalBoxBootstrapComponent } from "./modal-box-bootstrap/modal-box-bootstrap.component";
import { NgxModdialogComponent } from './ngx-moddialog/ngx-moddialog.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "modalwindows/modalboxbootstrap", component: ModalBoxBootstrapComponent },
            { path: "modalwindows/ngxmoddialog", component: NgxModdialogComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ModalWindowsRoutingModule { }
