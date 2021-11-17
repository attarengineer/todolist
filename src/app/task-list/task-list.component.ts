import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Array<Task> = new Array<Task>();
  newTitle: string;

  constructor() { }

  ngOnInit(): void {
    // for (let i=0; i<10; i++) {
    //   this.tasks.push(new Task('تسک شماره: ' + i, false))
    // }
  }

  addNewTask() {
    let tasks: Task = new Task(this.newTitle, false)
    this.tasks.push(tasks)
  }

  getTask() {
    let validTasks = new Array<Task>();
    for (let i = 0; i < this.tasks.length; i++) {
      if (!this.tasks[i].isDone) {
        validTasks.push(this.tasks[i]);
      }
    }
    return validTasks;
  }

}
