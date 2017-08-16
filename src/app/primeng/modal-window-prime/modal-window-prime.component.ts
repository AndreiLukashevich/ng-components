import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/primeng';


@Component({
  moduleId: module.id,
  selector: 'app-modal-window-prime',
  templateUrl: 'modal-window-prime.component.html',
  styleUrls: ['modal-window-prime.component.css', '../../app.component.css'],
  providers: [ConfirmationService]
})
export class ModalWindowPrimeComponent implements OnInit {

  display: boolean = false;
  msgs: Message[] = [];

  constructor(private router: Router, private confirmationService: ConfirmationService) {
  }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }
  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'fa fa-question-circle',
      accept: () => {
        console.log('true');
        this.msgs = [{
          severity: 'info', summary: 'Confirmed', detail: 'You have accepted'
        }];
      },
      reject: () => {
        console.log('false');
        this.msgs = [{
          severity: 'info', summary: 'Rejected', detail: 'You have rejected'
        }];
      }
    });
  }

  confirm2() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        console.log('true');
        this.msgs = [{
          severity: 'info', summary: 'Confirmed', detail: 'Record deleted'
        }];
      },
      reject: () => {
        console.log('false');
        this.msgs = [{
          severity: 'info', summary: 'Rejected', detail: 'You have rejected'
        }];
      }
    });
  }

  goToPrimeng() {
    this.router.navigate(["primeng"]);
  }

}
