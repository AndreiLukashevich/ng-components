import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DatePickerNgxComponent } from './date-picker-ngx/date-picker-ngx.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "ngx/date-picker-ngx", component: DatePickerNgxComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class NgxRoutingModule { }
