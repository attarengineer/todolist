import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectService, Task } from '../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  tasks: Array<Task> = new Array<Task>();
  project: Project;
  constructor(
    private projectService: ProjectService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id: number =+ this.activatedRouter.snapshot.params['id'];
    this.tasks = this.projectService.getTask(id);
    
  }

}
