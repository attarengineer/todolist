import { Component, Input, OnInit } from '@angular/core';
import { Project, ProjectService, Task } from '../services/project.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    
  }

  completeTask() {
    this.task.isDone = true;
  }
  
  getProjectTitle() {
    return this.projectService.getProjectOfTask(this.task).title;
  }

  getProjectID() {
    return this.projectService.getProjectOfTask(this.task).id.toString();
  }
}


