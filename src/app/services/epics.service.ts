import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Epic } from '../interfaces/epic.interface';
import { Story } from '../interfaces/story.interface';

@Injectable({
  providedIn: 'root'
})
export class EpicsService {
  private _epics: Epic[] = [];
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:8080/epics';
   }

  get epics(): Epic[] {
    return [...this._epics];
  }

  public saearchEpics() {
    this.http.get<Epic[]>(this.endpoint)
          .subscribe(response => this._epics = response)
  }

  public searchStoriesByEpic(epicId: number): Story[] {
    let stories: Story[] = []
    
    this.http.get<Story[]>(this.endpoint + '/' + epicId + '/stories')
          .subscribe(response => stories = response)

    return stories;
  }
}
