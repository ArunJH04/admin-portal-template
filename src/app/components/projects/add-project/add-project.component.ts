import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentService } from '../../component.service';
import { Projects } from '../../model/projects';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  projectInfo = <Projects>{};
  vendorList = [];
  projectTypeList = [];

  constructor(
    private Router: Router,
    private componentService: ComponentService
  ) {}

  ngOnInit() {
    this.getVendorsList();
    this.getProjectTypesList();
    //this.getProjectTypesStatus();
  }

  getVendorsList() {
    this.componentService.getAllVendors().subscribe((data: any) => {
      this.vendorList = data;
    });
  }
  getProjectTypesList() {
    this.componentService.getAllProjectTypes().subscribe((data: any) => {
      this.projectTypeList = data;
    });
  }
  addProjectDetails() {
    console.log(this.projectInfo);
    this.componentService
      .addProject(this.projectInfo)
      .subscribe((data: any) => {
        this.Router.navigate(['components/projects']);
      });
  }
}
