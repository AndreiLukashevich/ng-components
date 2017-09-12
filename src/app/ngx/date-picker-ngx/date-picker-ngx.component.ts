import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDatepickerComponent } from 'ngx-bootstrap/datepicker';


@Component({
  moduleId: module.id,
  selector: 'app-date-picker-ngx',
  templateUrl: 'date-picker-ngx.component.html',
  styleUrls: ['date-picker-ngx.component.css', '../../app.component.css']
})
export class DatePickerNgxComponent implements OnInit {

  testForm: FormGroup;
  value: Date;

  constructor(private router: Router, private fb: FormBuilder) { }

  colorTheme = 'theme-dark-blue';
  bsConfig: Partial<BsDatepickerConfig>;

  ngOnInit() {
    this.buildForm();
    this.bsConfig = Object.assign({}, {
      containerClass: this.colorTheme
    });
  }

  buildForm() {
    this.testForm = this.fb.group({
    });
  }

  goToNgx() {
    this.router.navigate(["ngx"]);
  }

}
