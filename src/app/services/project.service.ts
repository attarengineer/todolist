import { PassThrough } from "stream";

export class ProjectService {
    projects: Array<Project> = new Array<Project>();
    constructor() {}
    
    getProjects() {
        return this.projects;
    }
    
    addTaskProject(task: Task, projectID: number=0){
        if(this.projects[projectID] != null && this.projects[projectID] != undefined){
            this.projects[projectID].tasks.push(task);
        }else{ //TODO: fix it later
           
        }
    }
    


}

export class Project {
    public title: string;
    public tasks: Array<Task> = new Array<Task>();
    constructor(title: string){
      this.title = title;
    }
  }