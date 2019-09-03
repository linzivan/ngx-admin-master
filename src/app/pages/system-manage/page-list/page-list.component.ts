import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {PageListData} from '../../../@core/data/page-list';
import {Router} from '@angular/router';
import {NbComponentStatus} from "@nebular/theme";

@Component({
  selector: 'ngx-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent implements OnInit, OnChanges {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  @Input() menuItem;
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.menuItem = changes.menuItem.currentValue;
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
      deleteButtonContent: '<font size="3" face="arial">选择</font>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: '界面名称',
        type: 'string',
      },
      menu_desc: {
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
        valuePrepareFunction: (cell, row ) => {
          if (cell) {
            return '是';
          }
          return '否';
         },
      },
      active: {
        title: '是否显示',
        type: 'string',
        valuePrepareFunction: (cell, row ) => {
          if (cell) {
            return '是';
          }
          return '否';
         },
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

  constructor(private service: PageListData,
              private route: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    // localStorage.setItem('current_menu', JSON.stringify(event.data));
    this.route.navigate(['/pages/system-manage/menu-config']);
  }
}
