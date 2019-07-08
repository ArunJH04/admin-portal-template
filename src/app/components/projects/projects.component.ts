import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor( private Router: Router) { }

  ngOnInit() {
  }

  navAddProject() {
    console.log("add pro");
    this.Router.navigate(['components/projects/add-project']);
  }

}
