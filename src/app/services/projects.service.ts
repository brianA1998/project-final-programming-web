import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../interfaces/project.interface';
import { Epic } from '../interfaces/epic.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: Project[] = [];

  constructor(private http: HttpClient) {}

  public searchProjects() {
    
    this.http.get<Project[]>("/projects")
          .subscribe(response => this.projects = response)
  }
}
