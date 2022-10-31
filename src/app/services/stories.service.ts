import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../interfaces/story.interface';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private _stories: Story[] = [];
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:8080/stories';
   }

  get stories(): Story[] {
    return [...this._stories];
  }

  public saearchStories() {
    this.http.get<Story[]>(this.endpoint)
          .subscribe(response => this._stories = response)
  }

  public searchTasksByStory(storyId: number): Task[] {
    let tasks: Task[] = []
    
    this.http.get<Task[]>(this.endpoint + '/' + storyId + '/tasks')
          .subscribe(response => tasks = response)

    return tasks;
  }
}
