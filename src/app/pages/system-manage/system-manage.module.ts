import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

import { SystemManageRoutingModule } from './system-manage-routing.module';
import { PageListComponent } from './page-list/page-list.component';
import {
  NbActionsModule,
  NbAlertModule, NbButtonModule,
  NbCardModule, NbCheckboxModule, NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbPopoverModule, NbRadioModule,
  NbSearchModule, NbSelectModule,
  NbTreeGridModule, NbUserModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { PermissionSetComponent } from './permission-set/permission-set.component';
import { PageParamsComponent } from './page-params/page-params.component';
import {TreeModule} from "angular-tree-component";
import {SystemManageComponent} from './system-manage.component';
import { MenuConfigComponent } from './menu-config/menu-config.component';

const COMPONENTS = [
  PageListComponent,
  PermissionSetComponent,
  PageParamsComponent,
  SystemManageComponent,
  MenuConfigComponent,
];

const IMPORTS = [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbPopoverModule,
    NbSearchModule,
    NbAlertModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbSelectModule,
    NbDatepickerModule,
    ThemeModule,
    NbRadioModule,
    NbCheckboxModule,
    CommonModule,
    Ng2SmartTableModule,
    SystemManageRoutingModule,
    ReactiveFormsModule,
    TreeModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
})
export class SystemManageModule { }
