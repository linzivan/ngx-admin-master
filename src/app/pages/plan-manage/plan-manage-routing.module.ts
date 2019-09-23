import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlanScheduleComponent} from "./plan-schedule/plan-schedule.component";

const routes: Routes = [
  {
    path: 'plan-schedule',
    component: PlanScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanManageRoutingModule { }
