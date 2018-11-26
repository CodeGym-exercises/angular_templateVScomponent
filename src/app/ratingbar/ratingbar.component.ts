import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratingbar',
  templateUrl: './ratingbar.component.html',
  styleUrls: ['./ratingbar.component.css']
})
export class RatingbarComponent implements OnInit {
  current_box_value: number;
  cboxs: box[] = [{"isActive":false, "boxValue": 1},
  {"isActive":false, "boxValue": 2},
  {"isActive":false, "boxValue": 3},
  {"isActive":false, "boxValue": 4},
  {"isActive":false, "boxValue": 5}, ];
  constructor() {
  }
  
  mouseActive(currentValue) {
    this.current_box_value = currentValue;
    console.log("index: " + currentValue);
    for (let bx of this.cboxs){
      if (bx.boxValue <= this.current_box_value){
          bx.isActive = true;
      }
    }
  }

  mouseReset(currentValue) {
    for (let bx of this.cboxs){
      if (bx.boxValue > this.current_box_value)
        bx.isActive = false;
    }
  }
  ngOnInit() {
  }

}

class box {
  isActive: boolean;
  boxValue: number;
}
