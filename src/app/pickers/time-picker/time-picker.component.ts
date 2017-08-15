import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-time-picker',
  templateUrl: 'time-picker.component.html',
  styleUrls: ['time-picker.component.css', '../../app.component.css']
})
export class TimePickerComponent implements OnInit {

  testForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.testForm = this.fb.group({
      dateTimePopup: [],
      dateTimeDropdown: [],
      date: [],
      time: []
    });
  }

  goToPickers() {
    this.router.navigate(["pickers"]); 
  }

}
