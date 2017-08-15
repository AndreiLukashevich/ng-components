import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm, FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";


@Component({
  moduleId: module.id,
  selector: 'app-custom-autocomplete',
  templateUrl: 'custom-autocomplete.component.html',
  styleUrls: ['custom-autocomplete.component.css', '../../app.component.css']
})
export class CustomAutocompleteComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  goToAutocomplete() {
    this.router.navigate(["autocomplete"]);
  }

}
