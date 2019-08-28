import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {PageConfigData} from '../../../@core/data/page-config';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-page-config',
  templateUrl: './page-config.component.html',
  styleUrls: ['./page-config.component.scss'],
})
export class PageConfigComponent implements OnInit {
  ngOnInit() {
  }
  settings = {
    actions: {
      columnTitle: '操作',
      delete: true,
      add: false,
      edit: false,
      position: 'right',
    },
    pager: {
      perPage: 15,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<font size="3" face="arial">配置</font>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: '界面名称',
        type: 'string',
      },
      medium: {
        title: '界面描述',
        type: 'string',
      },
      type: {
        title: '界面类型',
        type: 'string',
      },
      showmobile: {
        title: '移动显示',
        type: 'string',
      },
      active: {
        title: '界面显示',
        type: 'string',
      },
      lastupdateon: {
        title: '修改时间',
        type: 'string',
      },
      lastupdatedby: {
        title: '修改人',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: PageConfigData,
              private route: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    this.route.navigate(['/pages/system-manage/permission-set']);
  }
}
