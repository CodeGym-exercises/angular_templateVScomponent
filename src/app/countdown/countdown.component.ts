import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy {
  private intervalValid;
  current_time: number;
  status: string;
  constructor() {
    this.current_time = 59;
  }
  ngOnInit() {
    this.start();
    this.stop();
  }
  ngOnDestroy() {
    this.stop();
  }
  stop() {
    clearInterval(this.intervalValid);
  }
  start() {
    this.countDown();
    if (this.current_time <= 0) {
      this.reset();
      this.stop();
    }
  }
  reset() {
   this.current_time = 59;
  }
  countDown() {
    this.intervalValid = setInterval(() => {
      this.current_time -= 1;
      console.log('time: ' + this.current_time);
      if (this.current_time === 0) {
        this.stop();
      }
    }, 999);
  }
}
