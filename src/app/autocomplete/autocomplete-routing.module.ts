import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NgTestAutocompleteComponent } from "./ng-test-autocomplete/ng-test-autocomplete.component";
import { CustomAutocompleteComponent } from './custom-autocomplete/custom-autocomplete.component';
import { AngularTypeaheadComponent } from './angular-typeahead/angular-typeahead.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "autocomplete/ng-test-autocomplete", component: NgTestAutocompleteComponent },
            { path: "autocomplete/custom-autocomplete", component: CustomAutocompleteComponent },
            { path: "autocomplete/angular-typeahead", component: AngularTypeaheadComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AutocompleteRoutingModule { }
