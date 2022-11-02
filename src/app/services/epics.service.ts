import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Epic } from '../interfaces/epic.interface';
import { Story } from '../interfaces/story.interface';

@Injectable({
  providedIn: 'root'
})
export class EpicsService {
  private _epics: Epic[] = [];

  constructor(private http: HttpClient) {   }

  get epics(): Epic[] {
    return [...this._epics];
  }

  public saearchEpics() {
    this.http.get<Epic[]>("/epics")
          .subscribe(response => this._epics = response)
  }

  public searchEpicsByProjects(projectId: number): Epic[] {
    let epics: Epic[] = []
    
    this.http.get<Epic[]>('/projects/' + projectId + '/epics')
          .subscribe(response => epics = response)

    return epics;
  }
}
