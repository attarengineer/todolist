import { Component, OnInit } from '@angular/core';
import { ProjectService, Task } from '../services/project.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // tasks: Array<Task> = new Array<Task>();
  newTitle: string;
  newprojectID: number;
  constructor(private projectService: ProjectService) {}
  ngOnInit(): void {
    // for (let i=0; i<10; i++) {
    //   this.tasks.push(new Task('تسک شماره: ' + i, false))
    // }
    // this.projects.push(new Project('شخصی'))
    this.newprojectID = 0;
  }

  addNewTask() {
    let task: Task = new Task(this.newTitle, false)
    // this.tasks.push(tasks)
    this.projectService.addTaskProject(task, this.newprojectID);
  }

  getTask() {
    let validTasks = new Array<Task>();
    for (let project of this.projectService.getProjects()) {
      for (let task of project.tasks) {
        if (!task.isDone) {
          validTasks.push(task);
        }
      }
    }
    return validTasks;
  }
}


