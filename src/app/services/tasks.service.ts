import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../interfaces/task.interface';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks: Task[] = [];

  constructor(private http: HttpClient, private login: LoginService) {   }

  get tasks(): Task[] {
    return this._tasks;
  }

  public searchTasks() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.login.Token
      })
    };
    
    this.http.get<Task[]>('/tasks', httpOptions)
          .subscribe(response => this._tasks = response)
  }

  public searchTasksByStory(storyId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: this.login.Token
      })
    };

    this.http.get<Task[]>('stories/' + storyId + '/tasks', httpOptions)
          .subscribe(response => this._tasks = response)
  }

  public removeTask(task: Task) {
    this._tasks = this._tasks.filter(item => task.id != item.id);
  }
}
