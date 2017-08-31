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
  public selectedIdx: number = -1;

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
      if (event.code == "ArrowDown") {
        this.selectedIdx++;
        if (this.selectedIdx < 0) {
          this.selectedIdx = 0;
        }

        if (this.selectedIdx > 0 && this.selectedIdx < this.filteredList.length) {
          document.getElementById('list325')
            .children[this.selectedIdx - 1]
            .removeAttribute('style');
          document.getElementById('list325')
            .children[this.selectedIdx - 1]
            .children[0]
            .children[0]
            .removeAttribute('style');
        }
        if (this.selectedIdx > -1 && this.selectedIdx < this.filteredList.length) {
          document.getElementById('list325')
            .children[this.selectedIdx]
            .setAttribute('style', 'background-color:#0275d8');
          document.getElementById('list325')
            .children[this.selectedIdx]
            .children[0]
            .children[0]
            .setAttribute('style', 'color:#ffffff');
        }
        //this.selectedIdx++;
        console.log(this.selectedIdx);
        if (this.selectedIdx > this.filteredList.length - 1) {
          this.selectedIdx = this.filteredList.length - 1;
        }
        // console.log(this.filteredList.length);

      } else if (event.code == "ArrowUp") {
        this.selectedIdx--;
        if (this.selectedIdx < 0) {
          this.selectedIdx = 0;
        }

        if (this.selectedIdx > -1 && this.selectedIdx < this.filteredList.length - 1) {
          document.getElementById('list325').children[this.selectedIdx + 1]
          .removeAttribute('style');
          document.getElementById('list325')
            .children[this.selectedIdx + 1]
            .children[0]
            .children[0]
            .removeAttribute('style');
        }
        if (this.selectedIdx > -1 && this.selectedIdx < this.filteredList.length) {
          document.getElementById('list325').children[this.selectedIdx]
          .setAttribute('style', 'background-color:#0275d8');
          document.getElementById('list325')
            .children[this.selectedIdx]
            .children[0]
            .children[0]
            .setAttribute('style', 'color:#ffffff');
        }
        console.log(this.selectedIdx);
        if (this.selectedIdx > this.filteredList.length - 1) {
          this.selectedIdx = this.filteredList.length - 1;
        }

      }
      else if (event.code == "Enter") {
        console.log("Enter");
        // console.log(document.getElementById('list325')
        //   .children[this.selectedIdx]
        //   .children[0]
        //   .children[0].textContent);
        this.query = document.getElementById('list325')
          .children[this.selectedIdx]
          .children[0]
          .children[0].textContent;
        this.filteredList = [];
      }
      else if (event.code !== "") {
        console.log("Backspace");
        this.selectedIdx = -1;
      }
    } else {
      this.filteredList = [];
      this.selectedIdx = -1;
    }
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  // enter(item) {
  //   this.query = item;
  //   this.filteredList = [];
  // }

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
