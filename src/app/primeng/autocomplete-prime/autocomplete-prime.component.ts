import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-autocomplete-prime',
  templateUrl: 'autocomplete-prime.component.html',
  styleUrls: ['autocomplete-prime.component.css', '../../app.component.css']
})
export class AutocompletePrimeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPrimeng() {
    this.router.navigate(["primeng"]);
  }

}
