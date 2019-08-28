import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageConfigComponent} from './page-config/page-config.component';
import {PermissionSetComponent} from './permission-set/permission-set.component';

const routes: Routes = [
  {
    path: 'page-config',
    component: PageConfigComponent,
  }, {
    path: 'permission-set',
    component: PermissionSetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemManageRoutingModule { }
