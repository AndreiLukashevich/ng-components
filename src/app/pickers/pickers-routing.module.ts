import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DatePickerComponent } from "./date-picker/date-picker.component";
import { TimePickerComponent } from "./time-picker/time-picker.component";
import { DateTimePickerComponent } from "./date-time-picker/date-time-picker.component";
import { DatepickerBootstrapComponent } from './datepicker-bootstrap/datepicker-bootstrap.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "pickers/date-picker", component: DatePickerComponent },
            { path: "pickers/time-picker", component: TimePickerComponent },
            { path: "pickers/date-time-picker", component: DateTimePickerComponent },
            { path: "pickers/datepicker-bootstrap", component: DatepickerBootstrapComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PickersRoutingModule { }
