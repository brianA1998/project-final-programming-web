import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoriesService } from '../services/stories.service';

@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrls: ['./my-stories.component.css']
})
export class MyStoriesComponent implements OnInit {
  private epicId: number = 0;
  public title: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: StoriesService
  ) { }


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    console.log(id)
    if(id != null) {
      this.epicId = +id;
      this.service.searchStoriesByEpic(this.epicId);
      this.title = "Stories for epic number " + this.epicId;
    } else {
      this.service.saearchStories();
      this.title = "My stories";
    }
  }

  public searchTasks(id: number) {
    let path = this.router.url;
    console.log(path)
    if (path != "/my-stories") {
      this.router.navigate([path, id])
    }
  }

}
