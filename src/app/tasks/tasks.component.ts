import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public title: string = "Tasks for story n° "
  private storyId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: TasksService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    if (id == null) {
      this.router.navigate(["dashboard"]);
    } else {
      this.storyId = +id;
      this.service.searchTasksByStory(this.storyId);
      this.title = this.title + id;
    }
  }
}
