import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgTestAutocompleteComponent } from "./ng-test-autocomplete/ng-test-autocomplete.component";
import { CustomAutocompleteComponent } from './custom-autocomplete/custom-autocomplete.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "autocomplete/ng-test-autocomplete", component: NgTestAutocompleteComponent },
            { path: "autocomplete/custom-autocomplete", component: CustomAutocompleteComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AutocompleteRoutingModule { }
