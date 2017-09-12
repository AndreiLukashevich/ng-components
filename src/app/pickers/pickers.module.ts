import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { OverlayModule } from 'angular-io-overlay';
import { DatePickerModule } from 'angular-io-datepicker';

import { DateTimePickerModule } from 'ng-pick-datetime';

import {DpDatePickerModule} from 'ng2-date-picker';

import { PickersRoutingModule } from "./pickers-routing.module";

import { PickersComponent } from './pickers.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { DatepickerBootstrapComponent } from './datepicker-bootstrap/datepicker-bootstrap.component';

import * as $ from 'jquery';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OverlayModule,
        DatePickerModule,
        DateTimePickerModule,
        PickersRoutingModule,
        DpDatePickerModule
    ],
    declarations: [
        PickersComponent,
        DatePickerComponent,
        TimePickerComponent,
        DateTimePickerComponent,
        DatepickerBootstrapComponent
    ]
})
export class PickersModule { }
