import { Injectable } from '@angular/core';
import {PageListData} from '../data/page-list';

@Injectable()
export class PageListService extends PageListData {

  data = [{
    id: 1,
    name: '系统管理',
    type: '导航栏',
    menu_desc: '系统管理',
    showmobile: false,
    showdesktop: false,
    redirecturl: 'mabotech.com',
    image_url: 'www.baidu.com',
    active: true,
    lastupdateon: '2019-08-28',
    lastupdatedby: 'admin',
  }, {
    id: 2,
    name: '界面1',
    menu_desc: '界面1',
    type: '界面',
    showmobile: false,
    showdesktop: false,
    redirecturl: '/pages/system-manage/page-params',
    image_url: 'www.baidu.com',
    active: true,
    lastupdateon: '2019-08-28',
    lastupdatedby: 'admin',
  }, {
    id: 3,
    name: '界面2',
    menu_desc: '界面2',
    type: '界面',
    showmobile: true,
    showdesktop: true,
    redirecturl: '/pages/system-manage/page-params',
    image_url: 'www.baidu.com',
    active: true,
    lastupdateon: '2019-08-28',
    lastupdatedby: 'admin',
  }, {
    id: 4,
    name: '界面3',
    menu_desc: '界面3',
    type: '界面',
    showmobile: true,
    showdesktop: false,
    redirecturl: '/pages/system-manage/page-params',
    image_url: 'www.baidu.com',
    active: true,
    lastupdateon: '2019-08-28',
    lastupdatedby: 'admin',
  }, {
    id: 5,
    name: '界面4',
    menu_desc: '界面4',
    type: '界面',
    showmobile: false,
    showdesktop: false,
    redirecturl: 'mabotech.com',
    image_url: 'www.baidu.com',
    active: true,
    lastupdateon: '2019-07-28',
    lastupdatedby: 'admin',
  }, {
    id: 6,
    name: '界面5',
    menu_desc: '界面5',
    type: '界面',
    showmobile: true,
    active: true,
    showdesktop: false,
    redirecturl: 'mabotech.com',
    image_url: 'www.baidu.com',
    lastupdateon: '2019-05-28',
    lastupdatedby: 'mabo',
  }];

  getData() {
    return this.data;
  }
}
