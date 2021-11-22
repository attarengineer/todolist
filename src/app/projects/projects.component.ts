import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService, Project } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = new Array<Project>();
  newProjectTitle: string;

  constructor(
    private projectService: ProjectService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
  
  onShowProjects() {
    this.router.navigate(["/projects"])
  }

  onNewProject() {
    this.projectService.addNewProject(this.newProjectTitle);
  }

  getProjectsTitle() {
    return this.projectService.getProjects();
  }
}
