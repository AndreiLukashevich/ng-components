import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AutocompletePrimeComponent } from './autocomplete-prime/autocomplete-prime.component';
import { DateTimePickerPrimeComponent } from './date-time-picker-prime/date-time-picker-prime.component';
import { ModalWindowPrimeComponent } from './modal-window-prime/modal-window-prime.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "primeng/autocomplete-prime", component: AutocompletePrimeComponent },
            { path: "primeng/date-time-picker-prime", component: DateTimePickerPrimeComponent },
            { path: "primeng/modal-window-prime", component: ModalWindowPrimeComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PrimengRoutingModule { }
