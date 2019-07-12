import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './component-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { ComponentService } from '../components/component.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProjectsComponent, UsersComponent],
  imports: [FormsModule, CommonModule, ComponentsRoutingModule, HttpClientModule],
  providers: [ComponentService]
})
export class ComponentsModule {}
