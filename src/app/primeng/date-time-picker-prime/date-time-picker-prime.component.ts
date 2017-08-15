import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'app-date-time-picker-prime',
  templateUrl: 'date-time-picker-prime.component.html',
  styleUrls: ['date-time-picker-prime.component.css', '../../app.component.css']
})
export class DateTimePickerPrimeComponent implements OnInit {

  value: Date;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPrimeng() {
    this.router.navigate(["primeng"]);
  }

}
