import { Injectable } from '@angular/core';
import {PageConfigData} from '../data/page-config';

@Injectable()
export class PageConfigService extends PageConfigData {

  data = [{
    name: '系统管理',
    type: '导航栏',
    showmobile: '否',
    active: '是',
    lastupdateon: '2019-08-28',
    lastupdatedby: 'admin',
  }, {
    name: '界面1',
    type: '界面',
    showmobile: '否',
    active: '是',
    lastupdateon: '2019-08-28',
    lastupdatedby: 'admin',
  }, {
    name: '界面2',
    type: '界面',
    showmobile: '是',
    active: '是',
    lastupdateon: '2019-08-28',
    lastupdatedby: 'admin',
  }, {
    name: '界面3',
    type: '界面',
    showmobile: '是',
    active: '是',
    lastupdateon: '2019-08-28',
    lastupdatedby: 'admin',
  }, {
    name: '界面4',
    type: '界面',
    showmobile: '否',
    active: '是',
    lastupdateon: '2019-07-28',
    lastupdatedby: 'admin',
  }, {
    name: '界面5',
    type: '界面',
    showmobile: '是',
    active: '是',
    lastupdateon: '2019-05-28',
    lastupdatedby: 'mabo',
  }];

  getData() {
    return this.data;
  }
}
