import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor(public service: ProjectsService, private route: Router) {}

  ngOnInit(): void {
    this.service.searchProjects();
  }

  public test(id: number) {
    this.route.navigate([this.route.url, id])
  }

}
