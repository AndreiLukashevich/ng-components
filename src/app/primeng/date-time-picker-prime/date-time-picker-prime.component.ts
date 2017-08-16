import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'app-date-time-picker-prime',
  templateUrl: 'date-time-picker-prime.component.html',
  styleUrls: ['date-time-picker-prime.component.css', '../../app.component.css']
})
export class DateTimePickerPrimeComponent implements OnInit {

  testForm: FormGroup;
  value: Date;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.testForm = this.fb.group({
      date: [],
      datem: [],
      time: [],
      datetime: []
    });
  }

  goToPrimeng() {
    this.router.navigate(["primeng"]);
  }

}
