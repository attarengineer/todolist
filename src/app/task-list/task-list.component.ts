import { Component, OnInit } from '@angular/core';
import { ProjectService, Task } from '../services/project.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTitle: string;
  newprojectID: number;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.newprojectID = 0;
  }

  addNewTask() {
    let task: Task = new Task(this.newTitle, false, this.newprojectID)
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

  getProjectsTitle() {
  //   let titles = new Array<String>();
  //   for (let project of this.projectService.getProjects()) {
  //     titles.push(project.title);
  //   }
  //   return titles;
  // }
    return this.projectService.getProjects();
  }
}