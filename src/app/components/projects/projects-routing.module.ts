import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectComponent } from "../projects/add-project/add-project.component";
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects'
    }, children: [
      {
        path: 'add-project',
        component: AddProjectComponent
      }
    ]
  },
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
