import { Injectable } from '@angular/core';
import {RoleData} from "../data/role";

@Injectable()
export class RoleDataService extends RoleData {

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
  }];

  getData() {
    return this.data;
  }
}
