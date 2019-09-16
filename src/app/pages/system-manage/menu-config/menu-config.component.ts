import { Component, OnInit } from '@angular/core';
import {MenuListData} from "../../../@core/data/menu-list";
import {NbComponentSize, NbComponentStatus, NbDialogService, NbIconLibraries} from "@nebular/theme";
import {DialogAddmenuComponent} from "./dialog-addmenu/dialog-addmenu.component";
import {MenuTreeService} from "../service/menuTree-service";
import {DialogPageListComponent} from './dialog-page-list/dialog-page-list.component';
import {InsertMenuService} from "../service/insert-menu.service";

@Component({
  selector: 'ngx-menu-config',
  templateUrl: './menu-config.component.html',
  styleUrls: ['./menu-config.component.scss'],
})
export class MenuConfigComponent implements OnInit {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
  nodes; // TreeNodes
  selectedMenu; // 当前选中的菜单
  stats;        // Tree状态
  evaIcons; // 图标
  buttonDisabled = true; // 配置和权限按钮显示
  constructor(iconsLibrary: NbIconLibraries,
              private menuServer: MenuListData,
              private dialogService: NbDialogService,
              private menuTreeService: MenuTreeService,
              private insertMenuService: InsertMenuService) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    const current_menu = JSON.parse(localStorage.getItem('current_menu'));
  }
  ngOnInit() {
    this.loadMenuTree();
  }
  selected(event) {
    this.selectedMenu = event.node.data;
  }
  showConfig() {
    this.buttonDisabled = true;
  }
  showPermission() {
    this.buttonDisabled = false;
  }
  createMenu() {
    this.dialogService.open(DialogAddmenuComponent)
      .onClose.subscribe(name => {
        if (name) {
          // 如果没选中则为根Tree，没有父节点
          const parentid = this.selectedMenu ? this.selectedMenu.id : null;
          const menu = {
            'name': name,
            'parentid': parentid
          };
          this.insertMenuService.insertMenu(menu).subscribe(result => {
            if (result['result'] === 1) {
              this.loadMenuTree();
            }
          });
        }
    });
  }
  openPageList() {
    if (!this.selectedMenu) {
      window.alert('您还未选择菜单项！');
      return;
    }
    this.dialogService.open(DialogPageListComponent)
      .onClose.subscribe( data => {
        this.linkPage(data);
    });
  }
  linkPage(menu) {
    if (menu.id) {
      (this.selectedMenu.children || (this.selectedMenu.children = [])).push(menu);
    }
  }
  deleteMenu () {
    if (!this.selectedMenu) {
      window.alert('您还未选择要删除的菜单项！');
      return;
    }
    if (!this.selectedMenu.parentid && this.selectedMenu.children) {
      // 如果是父级菜单，并且含有子菜单，不能删除。
      window.alert('该父级菜单下含有子菜单，不能删除！');
      return ;
    }
    // TODO: HTTPAPI 删除子 Tree
    if (window.confirm(`确定要删除${this.selectedMenu.name}吗?`)) {
      this.nodes = this.menuServer.getData1();
      delete this.selectedMenu;
    }
  }
  loadMenuTree() {
    this.menuTreeService.getMenuTree()
      .subscribe((data) => {
        this.nodes = data;
      });
  }
}
