import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  declarations: [ProjectsComponent, AddProjectComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddProjectComponent,
    ProjectsRoutingModule,
    ButtonsModule.forRoot()
  ]
})
export class ProjectsModule {}
