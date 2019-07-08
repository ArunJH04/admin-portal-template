import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { Z_FULL_FLUSH } from 'zlib';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'components'
    },
    children: [
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'projects'
        }
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
