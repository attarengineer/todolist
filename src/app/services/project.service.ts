import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    projects: Array<Project> = new Array<Project>();
    lastIDNumber: number = 0;
    constructor() {
        this.addNewProject("پیش فرض");
    }

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
        this.projects.push(new Project(projectTitle, this.lastIDNumber++));
    }

    addNewTask(title: string, isDone: boolean, projectID: number = 0) {
        let newTask = new Task(title, isDone, projectID);
        this.addTaskProject(newTask, projectID);
    }

    getTask(projectID: number) {
        if(this.projects[projectID] != null && this.projects[projectID] != undefined) {
            return this.projects[projectID].tasks;
        }else{
            return null;
        }
    }

    getProjectOfTask(task: Task) {
        if(this.projects[task.projectID] != null && this.projects[task.projectID] != undefined) {
            return this.projects[task.projectID]
        }else{
            return null;
        }
    }
}

export class Project {
    public title: string;
    public id: number;
    public tasks: Array<Task> = new Array<Task>();
    constructor(title: string, id: number) {
        this.title = title;
        this.id = id;
    }
}

export class Task {
    public title: string;
    public isDone: boolean = false;
    public projectID: number;

    constructor(title: string, isDone: boolean, projectID: number) {
        this.title = title;
        this.isDone = isDone;
        this.projectID = projectID;
    }
}