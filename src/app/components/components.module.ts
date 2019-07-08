import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './component-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [ProjectsComponent, UsersComponent],
  imports: [CommonModule, ComponentsRoutingModule]
})
export class ComponentsModule {}
