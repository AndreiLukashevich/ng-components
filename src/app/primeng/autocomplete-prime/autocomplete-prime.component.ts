import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { CountryService } from './country.service';

@Component({
  moduleId: module.id,
  selector: 'app-autocomplete-prime',
  templateUrl: 'autocomplete-prime.component.html',
  styleUrls: ['autocomplete-prime.component.css', '../../app.component.css'],
  providers: [CountryService]
})
export class AutocompletePrimeComponent implements OnInit {

  country: any;
  countries: any[];
  filteredCountriesSingle: any[];
  filteredCountriesMultiple: any[];
  brands: string[] = [
    'Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'
  ];
  filteredBrands: any[];
  brand: string;

  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit() {
  }

  filterCountrySingle(event) {
    let query = event.query;
    this.countryService.getCountries().then(countries => {
      this.filteredCountriesSingle = this.filterCountry(query, countries);
    });
  }

  filterCountryMultiple(event) {
    let query = event.query;
    this.countryService.getCountries().then(countries => {
      this.filteredCountriesMultiple = this.filterCountry(query, countries);
    });
  }

  filterCountry(query, countries: any[]): any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      let brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredBrands.push(brand);
      }
    }
  }

  handleDropdownClick() {
    this.filteredBrands = [];

    //mimic remote call
    setTimeout(() => {
      this.filteredBrands = this.brands;
    }, 100)
  }

  goToPrimeng() {
    this.router.navigate(["primeng"]);
  }

}
