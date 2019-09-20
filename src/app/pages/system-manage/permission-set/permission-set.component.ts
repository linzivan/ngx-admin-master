import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {RoleData} from "../../../@core/data/role";
import {RoleListData} from "../../../@core/data/role_list";
import {NbComponentStatus, NbIconLibraries} from "@nebular/theme";
import {Router} from "@angular/router";
import {GetAllRolesService} from '../service/get-all-roles.service';
import {GetMenuRoleService} from "../service/get-menu-role.service";
import {DeleteMenuRoleService} from "../service/delete-menu-role.service";
import {InsertMenuRoleService} from "../service/insert-menu-role.service";

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
  isShowRoleList = false;
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
    pager: {
      perPage: 7,
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
    },
    pager: {
      perPage: 7,
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
              private getAllRolesService: GetAllRolesService,
              private getMenuRoleService: GetMenuRoleService,
              private deleteMenuRoleService: DeleteMenuRoleService,
              private insertMenuRoleService: InsertMenuRoleService) {

    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }

  permissionDeleteEvent(event): void {
    // 页面权限删除事件
    if (window.confirm('您确定要删除吗?')) {
      const menu_role = {
        menuid: this.menuItem.id,
        roleid: event.data.roleid,
      };
      this.deleteMenuRoleService.deleteMenuRole(menu_role).subscribe(result => {
        if (result['result']) {
          event.confirm.resolve();
          this.loadData();
        }
      });
    } else {
      event.confirm.reject();
    }
  }
  roleAddEvent(event) {
    // 页面权限添加事件
    const menu_role = {
        menuid: this.menuItem.id,
        roleid: event.data.id,
      };
    this.insertMenuRoleService.insertMenuRole(menu_role).subscribe(result => {
        if (result['result']) {
          this.loadData();
        }
      });
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
    this.getAllRolesService.getAllRoles().subscribe(all_role_list => {
          this.getMenuRoleService.getMenuRole(this.menuItem).subscribe(page_roles => {
                this.processPageRole(all_role_list, page_roles);
            });
      });
  }
  processPageRole(all_role_list, page_roles) {
     // 该页面目前的权限
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
  toggle() {
    this.isShowRoleList = !this.isShowRoleList;
  }
}
