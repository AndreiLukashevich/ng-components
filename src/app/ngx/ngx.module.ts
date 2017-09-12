import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxRoutingModule } from "./ngx-routing.module";

import { NgxComponent } from './ngx.component';
import { DatePickerNgxComponent } from './date-picker-ngx/date-picker-ngx.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxRoutingModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        NgxComponent,
        DatePickerNgxComponent
    ]
})
export class NgxModule { }