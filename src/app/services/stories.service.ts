import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Story } from '../interfaces/story.interface';
import { Task } from '../interfaces/task.interface';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private _stories: Story[] = [];

  constructor(private http: HttpClient, private login: LoginService) {   }

  get stories(): Story[] {
    return this._stories
  }

  public saearchStories() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.login.Token
      })
    };
    
    this.http.get<Story[]>("/stories", httpOptions)
          .subscribe(response => this._stories = response)
  }

  public searchStoriesByEpic(epicId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.login.Token
      })
    };

    this.http.get<Story[]>('/epics/' + epicId + '/stories', httpOptions)
          .subscribe(response => this._stories = response)
  }
}
