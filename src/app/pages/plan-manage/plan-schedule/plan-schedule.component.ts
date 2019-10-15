import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {PlanScheduleService} from "../../../@core/mock/plan-schedule.service";

@Component({
  selector: 'ngx-plan-schedule',
  templateUrl: './plan-schedule.component.html',
  styleUrls: ['./plan-schedule.component.scss'],
})
export class PlanScheduleComponent implements OnInit {

  plan_schedule_data: LocalDataSource = new LocalDataSource();
  selectedRows = [];
  constructor(private planScheduleService: PlanScheduleService) {
  }

  ngOnInit() {
    this.loadData();
  }
  settings = {
    selectMode: 'multi',
    defaultStyle: false,
    actions: {
      columnTitle: '操作',
      delete: false,
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      perPage: 7,
    },
    columns: {
      wiporderno: {
        title: '工单编号',
        type: 'string',
      },
      wipordertype: {
        title: '工单类型',
        type: 'string',
        filter: false,
      },
      orderindex: {
        title: '工单顺序',
        type: 'number',
      },
      productid: {
        title: '物料编号',
        type: 'string',
        filter: false,
      },
      productdesc: {
        title: '物料描述',
        type: 'string',
        filter: false,
      },
      lastupdateon: {
        title: '操作人',
        type: 'string',
        filter: false,
      },
      lastupdateby: {
        title: '操作人',
        type: 'string',
        filter: false,
      },
    },
  };
  loadData() {
    this.plan_schedule_data.load(this.planScheduleService.getData());
  }
  onUserRowSelect(event) {
    this.selectedRows = event.selected;
    console.warn(this.selectedRows);
  }
}
