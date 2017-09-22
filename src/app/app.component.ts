import { Component, AfterViewInit } from '@angular/core';
import { Router, Route } from "@angular/router";
import { AppService } from "./app.service";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  public arrRoutes = [];
  constructor(public testRoutesService: AppService, public router?: Router) {

  }

  ngOnInit() {
    this.printpath('', this.router.config);
    // console.log(this.arrRoutes);

  }

  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      let r = config[i];
      this.arrRoutes.push(r.path);
      console.log(parent + '/' + r.path);
      if (r.children && r.path) {
        this.printpath(parent + '/' + r.path, r.children);
      }
    }
    console.log('Test ' + this.arrRoutes);
    this.testRoutesService.testService = this.arrRoutes;
  }

}
