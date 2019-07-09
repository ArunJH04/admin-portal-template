import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './component-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { AddProjectComponent } from '../components/projects/add-project/add-project.component';
import { ComponentService } from '../components/component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProjectsComponent, UsersComponent, AddProjectComponent],
  imports: [
    FormsModule,
    CommonModule,
    ComponentsRoutingModule,
    HttpClientModule
  ],
  providers: [ComponentService]
})
export class ComponentsModule {}
