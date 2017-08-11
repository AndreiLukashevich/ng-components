import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalWindowsRoutingModule } from "./modal-windows-routing.module";

import { ModalWindowsComponent } from './modal-windows.component';
import { ModalBoxBootstrapComponent } from './modal-box-bootstrap/modal-box-bootstrap.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalWindowsRoutingModule
  ],
  declarations: [
    ModalWindowsComponent,
    ModalBoxBootstrapComponent
  ]
})
export class ModalWindowsModule { }
