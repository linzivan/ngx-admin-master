import { Injectable } from '@angular/core';
import {RoleData} from "../data/role";

@Injectable()
export class RoleDataService extends RoleData {

  data = [{
    role: '操作员',
    medium: '操作员',
    lastupdateon: '2018-01-01',
  }, {
    role: '中转员',
    medium: '中转员',
    lastupdateon: '2018-01-01',
  }, {
    role: '工艺师',
    medium: '工艺师',
    lastupdateon: '2018-01-01',
  }, {
    role: '资料员',
    medium: '资料员',
    lastupdateon: '2018-01-01',
  }, {
    role: 'Security guard',
    medium: '安全保密员',
    lastupdateon: '2018-01-01',
  }, {
    role: '工时定额员',
    medium: '工时定额员',
    lastupdateon: '2018-01-01',
  }];

  getData() {
    return this.data;
  }
}
