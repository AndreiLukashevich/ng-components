import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AppComponent } from '../app.component';

@Component({
  moduleId: module.id,
  selector: 'app-pickers',
  templateUrl: 'pickers.component.html',
  styleUrls: ['pickers.component.css', '../app.component.css']
})
export class PickersComponent {
  private testPick1Service = new AppService();
  // private testPickAppComp = new AppComponent();
  constructor(private testPickService: AppService) {
  }

  ngOnInit() {
    console.clear()
    console.log(this.testPickService.testService);
    console.log('-------------------------');
    console.log(this.testPick1Service.testService);
  }

}
