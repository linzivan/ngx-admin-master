import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanManageRoutingModule } from './plan-manage-routing.module';
import { PlanScheduleComponent } from './plan-schedule/plan-schedule.component';
import {
  NbActionsModule,
  NbAlertModule, NbButtonModule,
  NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbPopoverModule, NbRadioModule,
  NbSearchModule, NbSelectModule, NbTableModule, NbTabsetModule,
  NbTreeGridModule, NbUserModule
} from "@nebular/theme";
import {ThemeModule} from "../../@theme/theme.module";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ReactiveFormsModule} from "@angular/forms";
import {TreeModule} from "angular-tree-component";
import {PlanScheduleService} from "../../@core/mock/plan-schedule.service";


const IMPORTS = [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbPopoverModule,
    NbSearchModule,
    NbTableModule,
    NbTabsetModule,
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
    ReactiveFormsModule,
    TreeModule,
    NbDialogModule.forChild(),
    PlanManageRoutingModule,
];


@NgModule({
  declarations: [PlanScheduleComponent],
  imports: [
    ...IMPORTS
  ],
  providers: [PlanScheduleService]
})
export class PlanManageModule { }
