import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutocompleteRoutingModule } from "./autocomplete-routing.module";

import { AutocompleteComponent, } from './autocomplete.component';
import { NgTestAutocompleteComponent } from './ng-test-autocomplete/ng-test-autocomplete.component';

import { Ng2CompleterModule } from "ng2-completer";
import { CustomAutocompleteComponent } from './custom-autocomplete/custom-autocomplete.component';
import { AngularTypeaheadComponent } from './angular-typeahead/angular-typeahead.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutocompleteRoutingModule,
    Ng2CompleterModule,
    NgxTypeaheadModule
  ],
  declarations: [
    AutocompleteComponent,
    NgTestAutocompleteComponent,
    CustomAutocompleteComponent,
    AngularTypeaheadComponent
  ]
})
export class AutocompleteModule { }
