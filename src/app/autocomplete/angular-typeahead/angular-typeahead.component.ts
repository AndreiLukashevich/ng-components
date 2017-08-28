import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'app-angular-typeahead',
  templateUrl: 'angular-typeahead.component.html',
  styleUrls: ['angular-typeahead.component.css']
})
export class AngularTypeaheadComponent implements OnInit {

  public url = 'http://suggestqueries.google.com/complete/search';
  public params = {
    hl: 'en',
    ds: 'yt',
    xhr: 't',
    client: 'youtube'
  };
  public search = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleResultSelected(result) {
    this.search = result;
  }

  goToAutocomplete() {
    this.router.navigate(["autocomplete"]);
  }

}
