import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList = [];
  projectInfo = {};
  constructor(
    private Router: Router,
    private componentService: ComponentService
  ) {}

  ngOnInit() {
    this.getProjectsList();
  }

  getProjectsList() {
    this.componentService.getProjects().subscribe((data: any) => {
      this.projectList = data;
    });
  }
  navAddProject() {
    this.Router.navigate(['components/add-project']);
  }
}
