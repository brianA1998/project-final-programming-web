import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project.interface';
import { Epic } from '../interfaces/epic.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private _projects: Project[] = [];
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:8080/projects';
   }

  get projects(): Project[] {
    return [...this._projects];
  }

  public searchProjects() {
    this.http.get<Project[]>(this.endpoint)
          .subscribe(response => this._projects = response)
  }

  public searchEpicsByProjects(projectId: number): Epic[] {
    let epics: Epic[] = []
    
    this.http.get<Epic[]>(this.endpoint + '/' + projectId + '/epics')
          .subscribe(response => epics = response)

    return epics;
  }
}
