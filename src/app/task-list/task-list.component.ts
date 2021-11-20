import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // tasks: Array<Task> = new Array<Task>();
  newTitle: string;
  

  constructor() { }

  ngOnInit(): void {
    // for (let i=0; i<10; i++) {
    //   this.tasks.push(new Task('تسک شماره: ' + i, false))
    // }
    this.projects.push(new Project('شخصی'))
  }

  addNewTask() {
    let task: Task = new Task(this.newTitle, false)
    // this.tasks.push(tasks)
    this.projects[0].tasks.push(task);
  }

  getTask() {
    let validTasks = new Array<Task>();
    for(let project of this.projects){
      for(let task of project.tasks){
        if (!task.isDone){
          validTasks.push(task);
        }
      }
    }
    return validTasks;
  }
}


