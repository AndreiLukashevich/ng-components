import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-date-picker',
  templateUrl: 'date-picker.component.html',
  styleUrls: ['date-picker.component.css', '../pickers.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DatePickerComponent implements OnInit {

  testForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.testForm = this.fb.group({
      date: [],
      time: [],
      datetime: []
    });
  }

  goToPickers() {
    this.router.navigate(["pickers"]); 
  }

}
