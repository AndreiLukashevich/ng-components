import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'app-modal-window-prime',
  templateUrl: 'modal-window-prime.component.html',
  styleUrls: ['modal-window-prime.component.css', '../../app.component.css']
})
export class ModalWindowPrimeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToPrimeng() {
    this.router.navigate(["primeng"]);
  }

}
