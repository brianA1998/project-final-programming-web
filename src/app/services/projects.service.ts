import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../interfaces/project.interface';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private _projects: Project[] = [];

  constructor(private http: HttpClient, private login: LoginService) {   }
  get projects(): Project[] {
    return this._projects;
  }

  public searchProjects() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.login.Token
      })
    };
    
    this.http.get<Project[]>("/projects", httpOptions)
          .subscribe(response => this._projects = response)
  }
}
