import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks: Task[] = [];

  constructor(private http: HttpClient) {  }

  get tasks(): Task[] {
    return this._tasks;
  }

  public searchTasks() {
    this.http.get<Task[]>('/tasks')
          .subscribe(response => this._tasks = response)
  }

  public searchTasksByStory(storyId: number) {
    this.http.get<Task[]>('stories/' + storyId + '/tasks')
          .subscribe(response => this._tasks = response)
  }

  public removeTask(task: Task) {
    this._tasks = this._tasks.filter(item => task.id != item.id);
  }
}
