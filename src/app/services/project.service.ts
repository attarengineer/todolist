import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    projects: Array<Project> = new Array<Project>();
    constructor() { }

    getProjects() {
        return this.projects;
    }

    addTaskProject(task: Task, projectID: number = 0) {
        if (this.projects[projectID] != null && this.projects[projectID] != undefined) {
            this.projects[projectID].tasks.push(task);
        } else { //TODO: fix it later
            this.addNewProject(projectID.toString());
            this.projects[projectID].tasks.push(task);
        }
    }
    addNewProject(projectTitle: string) {
        this.projects.push(new Project(projectTitle));
    }
}

export class Project {
    public title: string;
    public tasks: Array<Task> = new Array<Task>();
    constructor(title: string) {
        this.title = title;
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