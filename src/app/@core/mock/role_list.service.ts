import { Injectable } from '@angular/core';
import {RoleListData} from "../data/role_list";

@Injectable()
export class RoleListDataService extends RoleListData {

  data = [{
    role: 'Administrator',
    medium: '管理员',
    lastupdateon: '2018-01-01',
  }, {
    role: 'Quality Manager',
    medium: '质量管理员',
    lastupdateon: '2018-01-01',
  }, {
    role: 'Maintenance Worker',
    medium: '维修工人',
    lastupdateon: '2018-01-01',
  }, {
    role: 'Auditor',
    medium: '审计员',
    lastupdateon: '2018-01-01',
  }, {
    role: 'Isse_RespLeader',
    medium: '车间主管',
    lastupdateon: '2018-01-01',
  }, {
    role: 'Issue_QC',
    medium: '质检员',
    lastupdateon: '2018-01-01',
  }, {
    role: '部领导',
    medium: '部领导',
    lastupdateon: '2018-01-01',
  }, {
    role: '班组长',
    medium: '班组长',
    lastupdateon: '2018-01-01',
  }, {
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
    role: '现场工程师',
    medium: '现场工程师',
    lastupdateon: '2018-01-01',
  }, {
    role: '调试员',
    medium: '调试员',
    lastupdateon: '2018-01-01',
  }, {
    role: 'MOM_FacilityPlan',
    medium: '工厂计划员',
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
