import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../interfaces/project.interface';
import { Epic } from '../interfaces/epic.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private _projects: Project[] = [];

  constructor(private http: HttpClient) {}

  get projects(): Project[] {
    return [...this._projects];
  }

  public searchProjects() {
    
    this.http.get<Project[]>("/projects")
          .subscribe(response => this._projects = response)
  }
}
