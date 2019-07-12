import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { ComponentsModule } from '../components/components.module';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'components',
  //   pathMatch: 'full'
  // },
  {
    path: 'components',
    children: [
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'projects'
        }
      },
      {
        path: 'add-project',
        component: AddProjectComponent
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'users'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
