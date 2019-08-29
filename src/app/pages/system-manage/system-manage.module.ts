import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

import { SystemManageRoutingModule } from './system-manage-routing.module';
import { PageConfigComponent } from './page-config/page-config.component';
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
import {UiFeaturesComponent} from "../ui-features/ui-features.component";
import {GridComponent} from "../ui-features/grid/grid.component";
import {IconsComponent} from "../ui-features/icons/icons.component";
import {TypographyComponent} from "../ui-features/typography/typography.component";
import {SearchComponent} from "../ui-features/search-fields/search-fields.component";
import { PageParamsComponent } from './page-params/page-params.component';

const components = [
  UiFeaturesComponent,
  GridComponent,
  IconsComponent,
  TypographyComponent,
  SearchComponent,
];


@NgModule({
  declarations: [PageConfigComponent, PermissionSetComponent, ...components, PageParamsComponent],
  imports: [
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
  ],
})
export class SystemManageModule { }
