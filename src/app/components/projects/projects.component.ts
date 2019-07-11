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
    //this.getProjectTypesList();
    //this.getProjectTypesStatus();
    this.getVendorsList();
  }

  getProjectsList() {
    this.componentService.getAllProjects().subscribe((data: any) => {
      this.projectList = data;
    });
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
