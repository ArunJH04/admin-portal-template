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
  vendorList = [];
  projectInfo = {};
  constructor(
    private Router: Router,
    private componentService: ComponentService
  ) {}

  ngOnInit() {
    this.getProjectsList();
    this.getVendorsList();
  }

  getProjectsList() {
    this.componentService.getAllProjects().subscribe((data: any) => {
      this.projectList = data;
    });
  }

  search(term: string) {
    if (!term) {
      this.projectList = this.projectList;
    } else {
      this.projectList = this.projectList.filter(x =>
        x.name
          .trim()
          .toLowerCase()
          .includes(term.trim().toLowerCase())
      );
    }
  }

  getVendorsList() {
    this.componentService.getAllVendors().subscribe((data: any) => {
      this.vendorList = data;
    });
  }
  navAddProject() {
    this.Router.navigate(['components/add-project']);
  }
}
