import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Epic } from '../interfaces/epic.interface';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EpicsService {
  private _epics: Epic[] = [];

  constructor(private http: HttpClient, private login: LoginService) {   }

  get epics(): Epic[] {
    return this._epics;
  }

  public saearchEpics() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.login.Token
      })
    };
    
    this.http.get<Epic[]>("/epics", httpOptions)
          .subscribe(response => this._epics = response)
  }

  public searchEpicsByProjects(projectId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.login.Token
      })
    };
    
    this.http.get<Epic[]>('/projects/' + projectId + '/epics', httpOptions)
          .subscribe(response => this._epics = response)
  }
}
