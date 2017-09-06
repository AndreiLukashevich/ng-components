import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'datepicker-bootstrap',
  templateUrl: 'datepicker-bootstrap.component.html',
  styleUrls: ['datepicker-bootstrap.component.css', '../../app.component.css']
})
export class DatepickerBootstrapComponent implements OnInit {

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
