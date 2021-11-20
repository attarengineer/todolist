import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  completeTask() {
    this.task.isDone = true;
  }

}

export class Task {
  public title: string;
  public isDone: boolean = false;
  
  constructor(title: string, isDone: boolean) {
    this.title = title;
    this.isDone = isDone;
  }
}
