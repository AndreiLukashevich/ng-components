import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { PrimengRoutingModule } from "./primeng-routing.module";

import { PrimengComponent } from './primeng.component';
import { AutocompletePrimeComponent } from './autocomplete-prime/autocomplete-prime.component';
import { DateTimePickerPrimeComponent } from './date-time-picker-prime/date-time-picker-prime.component';
import { ModalWindowPrimeComponent } from './modal-window-prime/modal-window-prime.component';

import {ButtonModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PrimengRoutingModule,
        ButtonModule,
        CalendarModule,
        AutoCompleteModule
    ],
    declarations: [
        PrimengComponent,
        AutocompletePrimeComponent,
        DateTimePickerPrimeComponent,
        ModalWindowPrimeComponent
    ]
})
export class PrimengModule { }