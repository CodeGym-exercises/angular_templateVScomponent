import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  inputValue:string;
  works = [];
  isWorksEmpty = this.works.length === 0 ? true : false;
  isDone = false;
  constructor() { }

  onEnterInput(){
    this.works.push(new Work(this.inputValue,false));
    this.inputValue = '';
    console.log(this.works);
  }
  toggleStatus(){
    this.isDone = !this.isDone;
    console.log(this.isDone);
  }
  ngOnInit() {
  }

}

class Work {
  content: string;
  isDone: boolean;
  constructor(content: string, isdone: boolean) {
    this.content = content;
    this.isDone = isdone;
  }
}
