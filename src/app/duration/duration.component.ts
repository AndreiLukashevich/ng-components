import { Component, OnInit } from '@angular/core';

export class Clock {
  constructor(
    public time: any) {
  }
}

@Component({
  moduleId: module.id,
  selector: 'app-duration',
  templateUrl: 'duration.component.html',
  styleUrls: ['duration.component.css', '../app.component.css']
})
export class DurationComponent implements OnInit {

  clock: any = "";
  visible: boolean = false;
  hoursInMinute: number;
  hours: any;
  minute: number;


  constructor() { }

  ngOnInit() {
  }

  model: Clock = new Clock(null);
  onKeyup(data) {
    this.hours = data / 60;
    this.minute = data % 60;
    this.hoursInMinute = data - this.minute;
    this.hours = this.hoursInMinute / 60;
    console.log(isNaN(this.hours));
    if (!isNaN(this.hours)) {
      console.log(this.hours);
      this.visible = false;
      if (this.minute < 10) this.clock = this.hours + ":0" + this.minute;
      else {
        this.clock = this.hours + ":" + this.minute;
      }
    }
    else {
      this.visible = true;
    }
  }

}
