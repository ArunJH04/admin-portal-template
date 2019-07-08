import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './component-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { AddProjectComponent } from "../components/projects/add-project/add-project.component";
@NgModule({
  declarations: [ProjectsComponent, UsersComponent, AddProjectComponent],
  imports: [CommonModule, ComponentsRoutingModule]
})
export class ComponentsModule {}
