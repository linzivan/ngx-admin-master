import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuConfigComponent} from "./menu-config/menu-config.component";

const routes: Routes = [
  {
    path: 'menu-config',
    component: MenuConfigComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemManageRoutingModule { }
