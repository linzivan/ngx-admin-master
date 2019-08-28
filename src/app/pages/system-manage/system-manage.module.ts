import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemManageRoutingModule } from './system-manage-routing.module';
import { PageConfigComponent } from './page-config/page-config.component';

@NgModule({
  declarations: [PageConfigComponent],
  imports: [
    CommonModule,
    SystemManageRoutingModule,
  ],
})
export class SystemManageModule { }
