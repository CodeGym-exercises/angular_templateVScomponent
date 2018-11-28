import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../timelines/date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  private ouput = '';
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit() {
  }
  getOutPut(){
    return this.ouput;
  }
  onChange(value){
    this.ouput = this.dateUtilService.getDiffToNow(value);
    console.log("value: " + value + "\noutput : " + this.ouput);
  }
}
