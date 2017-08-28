import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'app-custom-autocomplete',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  templateUrl: 'custom-autocomplete.component.html',
  styleUrls: ['custom-autocomplete.component.css', '../../app.component.css']
})
export class CustomAutocompleteComponent implements OnInit {

  public query = '';
  public countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
    "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
    "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
    "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta",
    "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland",
    "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
    "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
  public filteredList = [];
  public elementRef;
  selectedIdx: number;

  constructor(private router: Router, myElement: ElementRef) {
    this.elementRef = myElement;
  }

  ngOnInit() {
  }

  filterr(event: any) {
    if (this.query !== "") {
      this.filteredList = this.countries.filter(function (el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
      if (event.code == "ArrowDown" ) {
        console.log(event);
        this.selectedIdx++;
        console.log(this.filteredList);
        let temp = document.getElementById('list325').children;
        // for (let i = 0; i < temp.length; i++) {
        //   temp[0].classList.toggle('test0');
        // }
        temp[2].classList.add('test0');
        console.log(temp);
      } else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
        console.log(event);
        this.selectedIdx--;
      }
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  handleClick(event) {
    let clickedComponent = event.target;
    let inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.filteredList = [];
    }
  }


  goToAutocomplete() {
    this.router.navigate(["autocomplete"]);
  }

}
