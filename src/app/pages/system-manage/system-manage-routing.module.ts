import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListComponent} from './page-list/page-list.component';
import {PermissionSetComponent} from './permission-set/permission-set.component';
import {PageParamsComponent} from "./page-params/page-params.component";
import {MenuConfigComponent} from "./menu-config/menu-config.component";

const routes: Routes = [
  {
    path: 'menu-config',
    component: MenuConfigComponent,
  },
  {
    path: 'page-list',
    component: PageListComponent,
  }, {
    path: 'permission-set',
    component: PermissionSetComponent,
  }, {
    path: 'page-params',
    component: PageParamsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemManageRoutingModule { }
