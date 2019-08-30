import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {RoleData} from "../../../@core/data/role";
import {RoleListData} from "../../../@core/data/role_list";
import {NbComponentStatus, NbIconLibraries} from "@nebular/theme";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-permission-set',
  templateUrl: './permission-set.component.html',
  styleUrls: ['./permission-set.component.scss'],
})
export class PermissionSetComponent implements OnInit , OnChanges {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  @Input() menuItem;
  current_page_roles = [];
  current_roles = [];
  evaIcons = [];
  permission_source: LocalDataSource = new LocalDataSource();
  role_list_source: LocalDataSource = new LocalDataSource();
  permission_settings = {
    actions: {
      columnTitle: '操作',
      delete: true,
      add: false,
      edit: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      role: {
        title: '角色',
        type: 'string',
      },
      medium: {
        title: '描述',
        type: 'string',
      },
      lastupdateon: {
        title: '修改时间',
        type: 'string',
      },
    },
  };
  role_list_settings = {
    actions: {
      columnTitle: '操作',
      delete: true,
      add: false,
      edit: false,
      position: 'right',
    },
    delete: {
      deleteButtonContent: '<i class="nb-plus"></i>',
      confirmDelete: true,
    },
    columns: {
      role: {
        title: '角色',
        type: 'string',
      },
      medium: {
        title: '描述',
        type: 'string',
      },
    },
  };
  constructor(private RoleDataService: RoleData,
              private RoleListDataService: RoleListData,
              iconsLibrary: NbIconLibraries,
              private route: Router) {

    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }

  permissionDeleteEvent(event): void {
    // 页面权限删除事件
    // TODO 与后台交互
    if (window.confirm('您确定要删除吗?')) {
      event.confirm.resolve();
      this.page_roles_remove(event.data);
      this.role_list_append(event.data);
      this.refreshData();
    } else {
      event.confirm.reject();
    }
  }
  roleAddEvent(event) {
    // 页面权限添加事件
    // TODO 与后台交互
    this.role_list_remove(event.data);
    this.page_roles_append(event.data);
    this.refreshData();
  }
  role_list_append(role) {
    this.current_roles.push(role);
  }
  role_list_remove(role) {
    let temp_role_list = [];
    for (let r of this.current_roles) {
      if (r.role !== role.role) {
        temp_role_list.push(r);
      }
    }
    this.current_roles = temp_role_list;
  }
  page_roles_append(role) {
    this.current_page_roles.push(role);
  }
  page_roles_remove(role) {
    let temp_page_roles = [];
    for (let r of this.current_page_roles) {
      if (r.role !== role.role) {
        temp_page_roles.push(r);
      }
    }
    this.current_page_roles = temp_page_roles;
  }
  ngOnInit() {
    this.loadData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.menuItem = changes.menuItem.currentValue;
    this.loadData();
  }
  refreshData() {
    // 更新两张表的数据
    this.permission_source.load(this.current_page_roles);
    this.role_list_source.load(this.current_roles);
  }
  loadData() {
    const current_menu_id = this.menuItem.id;
    // TODO: 通过menuId去查 该menu下的role
    const page_roles = this.RoleDataService.getData(current_menu_id); // 该页面目前的权限
    const all_role_list = this.RoleListDataService.getData(); // 所有权限
    let role_list = [];
    // 首先去除已选择的员工role
    for (let role of all_role_list) {
      let flag = true;
      for (let page_role of page_roles) {
        if (role.role === page_role.role && role.medium === page_role.medium) {
          flag = false;
          break;
        }
      }
      if (flag) {
        role_list.push(role);
      }
     }
    this.current_page_roles = page_roles;
    this.current_roles = role_list;
    this.refreshData();
  }
}
