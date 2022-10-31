import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks: Task[] = [];
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:8080/tasks';
   }

  get tasks(): Task[] {
    return [...this._tasks];
  }

  public searchTasks() {
    this.http.get<Task[]>(this.endpoint)
          .subscribe(response => this._tasks = response)
  }
}
