import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'app-date-time-picker',
  templateUrl: 'date-time-picker.component.html',
  styleUrls: ['date-time-picker.component.css', '../../app.component.css']
})
export class DateTimePickerComponent implements OnInit {

  testForm: FormGroup;

  configDate = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY'
  };
  configTime: any = {
    format: 'hh:mm A'
  };
  configDateTime = {
    allowMultiSelect: true,
    format: 'MM/DD/YYYY hh:mm A'
  };

  constructor(private router: Router, private fb: FormBuilder) {
  }

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
    this.router.navigate(['pickers']);
  }

}
