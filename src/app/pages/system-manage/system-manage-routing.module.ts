import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageConfigComponent} from './page-config/page-config.component';

const routes: Routes = [
  {
    path: 'page-config',
    component: PageConfigComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemManageRoutingModule { }
