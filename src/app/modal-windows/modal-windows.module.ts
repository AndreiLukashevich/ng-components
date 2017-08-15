import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalWindowsRoutingModule } from "./modal-windows-routing.module";

import { ModalWindowsComponent } from './modal-windows.component';
import { ModalBoxBootstrapComponent } from './modal-box-bootstrap/modal-box-bootstrap.component';
import { NgxModdialogComponent } from './ngx-moddialog/ngx-moddialog.component';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalWindowsRoutingModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [
    ModalWindowsComponent,
    ModalBoxBootstrapComponent,
    NgxModdialogComponent
  ]
})
export class ModalWindowsModule { }
