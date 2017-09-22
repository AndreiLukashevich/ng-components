import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { NgForm } from '@angular/forms';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-ngx-moddialog',
  templateUrl: 'ngx-moddialog.component.html',
  styleUrls: ['ngx-moddialog.component.css', '../../app.component.css']
})
export class NgxModdialogComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, public modal: Modal) { }

  ngOnInit() {
  }

  goToModalWindows() {
    this.router.navigate(["modalwindows"]);
  }

  onClickAlert() {
    const dialogRef = this.modal.alert()
      .size('sm')
      .isBlocking(true)
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h5>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h5>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>
            <input />
            `)
      .okBtn('Ok')
      .open();

    dialogRef
      .then(dialogRef => {
        dialogRef.result.then(
          result => { console.log(`${result}`) },
          result => { console.log(`${result}`) }
        );
      });
  }

  onClickPrompt() {
    const dialogRef = this.modal.prompt()
      .size('lg')
      .isBlocking(true)
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>
            <input />
            `)
      .okBtn('Submit')
      .open();

    dialogRef
      .then(dialogRef => {
        dialogRef.result.then(
          result => { console.log(`${result}`) },
          result => { console.log(`${result}`) }
        );
      });
  }

  onClickConfirm() {
    const dialogRef = this.modal.confirm()
      .size('lg')
      .isBlocking(true)
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>
            <input />
            `)
      .okBtn('Ok')
      .open();

    dialogRef
      .then(dialogRef => {
        dialogRef.result.then(
          result => { console.log(`${result}`) },
          result => { console.log(`${result}`) }
        );
      });
  }

}
