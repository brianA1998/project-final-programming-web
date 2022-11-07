import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EpicsService } from '../services/epics.service';

@Component({
  selector: 'app-epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.css']
})
export class EpicsComponent implements OnInit {
  private projectId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public service: EpicsService
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id)
    if(id != null) {
      this.projectId = +id;
      this.service.searchEpicsByProjects(this.projectId);
    }
  }

  public searchStories(id: number) {
    this.router.navigate([this.router.url, id])
  }

}
