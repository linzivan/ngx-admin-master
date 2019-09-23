import {Injectable} from "@angular/core";
import {PlanSchedule} from "../data/plan-schedule";

@Injectable()
export class PlanScheduleService extends PlanSchedule {
  data = [
    {
      wiporderno: 'wip01',
      wipordertype: '生产工单',
      orderindex: 1,
      productid: 'p01',
      productdesc: '物料01',
      lastupdateon: '2019-01-01',
      lastupdateby: 'admin',
    },    {
      wiporderno: 'wip02',
      wipordertype: '生产工单',
      orderindex: 2,
      productid: 'p02',
      productdesc: '物料02',
      lastupdateon: '2019-01-01',
      lastupdateby: 'admin',
    },    {
      wiporderno: 'wip02',
      wipordertype: '生产工单',
      orderindex: 3,
      productid: 'p02',
      productdesc: '物料02',
      lastupdateon: '2019-01-01',
      lastupdateby: 'admin',
    },
  ];
  getData() {
    return this.data;
  }
}
