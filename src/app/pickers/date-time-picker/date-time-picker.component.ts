import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

import { IDatePickerConfig } from '../../../../node_modules/ng2-date-picker/date-picker/date-picker-config.model';

@Component({
  moduleId: module.id,
  selector: 'app-date-time-picker',
  templateUrl: 'date-time-picker.component.html',
  styleUrls: ['date-time-picker.component.css', '../pickers.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class DateTimePickerComponent implements OnInit {

  testForm: FormGroup;
  configDate: IDatePickerConfig = {
    allowMultiSelect: true,
    format: "MM/DD/YYYY"
  };
  // configTime: any = {
  // };
  // config: IDatePickerConfig = {
  //   allowMultiSelect: true,
  //   format: "MM/DD/YYYY"
  // };
  configTime: any = {
    format: "hh:mm A"
  };
  config: any;
  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnChanges() {
    this.config = true
  }

  ngOnInit() {
    this.buildForm();
    this.config = {
      format: "MM/DD/YYYY", 
      allowMultiSelect: true
    }
    console.log(document.getElementById("date0"))
    console.log(this.config);
  }

  buildForm() {
    this.testForm = this.fb.group({
      date: [],
      time: [],
      date0: [],
      time0: []
    });
  }

  goToPickers() {
    this.router.navigate(["pickers"]);
  }

}
