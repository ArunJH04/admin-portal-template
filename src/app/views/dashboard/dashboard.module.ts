import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { VendorService } from '../../components/vendors/vendor.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [DashboardComponent],
  providers: [VendorService]
})
export class DashboardModule {}
