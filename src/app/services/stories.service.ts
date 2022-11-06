import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../interfaces/story.interface';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private _stories: Story[] = [];

  constructor(private http: HttpClient) {   }

  get stories(): Story[] {
    return this._stories
  }

  public saearchStories() {
    this.http.get<Story[]>("/stories")
          .subscribe(response => this._stories = response)
  }

  public searchStoriesByEpic(epicId: number) {
    this.http.get<Story[]>('/epics/' + epicId + '/stories')
          .subscribe(response => this._stories = response)
  }
}
