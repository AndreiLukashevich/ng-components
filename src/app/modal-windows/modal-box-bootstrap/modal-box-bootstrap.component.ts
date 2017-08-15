import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { NgForm } from '@angular/forms';

import { Customer } from './customer';

@Component({
  moduleId: module.id,
  selector: 'app-modal-box-bootstrap',
  templateUrl: 'modal-box-bootstrap.component.html',
  styleUrls: ['modal-box-bootstrap.component.css', '../../app.component.css']
})
export class ModalBoxBootstrapComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  title = "Modal Window";
  customer: Customer = new Customer();
  visible: boolean = false;

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
  show() {
    this.visible = true;
  }
  btnSave() {
    this.visible = false;
  }
  btnCancel() {
    this.visible = false;
  }

  goToModalWindows() {
    this.router.navigate(["modalwindows"]);
  }
}
