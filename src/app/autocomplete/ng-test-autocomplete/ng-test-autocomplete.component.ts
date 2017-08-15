import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm, FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

import { CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent } from "ng-auto-complete";
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  moduleId: module.id,
  selector: 'app-ng-test-autocomplete',
  templateUrl: 'ng-test-autocomplete.component.html',
  styleUrls: ['ng-test-autocomplete.component.css', '../../app.component.css']
})
export class NgTestAutocompleteComponent implements OnInit {

  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett'];


  constructor(private router: Router, private fb: FormBuilder, private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
  }

  ngOnInit() {
  }

  goToAutocomplete() {
    this.router.navigate(["autocomplete"]);
  }
}
