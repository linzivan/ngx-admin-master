import { Component, OnInit } from '@angular/core';
import {MenuListData} from "../../../@core/data/menu-list";
import {NbComponentSize, NbComponentStatus, NbIconLibraries} from "@nebular/theme";

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
  evaIcons; // 图标
  addFlag = false;
  buttonDisabled = true;
  constructor(iconsLibrary: NbIconLibraries,
              private menuServer: MenuListData) {
    this.nodes = this.menuServer.getData();
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    const current_menu = JSON.parse(localStorage.getItem('current_menu'));
  }
  ngOnInit() {
  }
  selected(event) {
    this.selectedMenu = event.node.data;
  }
  toggle() {
    this.buttonDisabled = !this.buttonDisabled;
  }
  addMenu() {
    this.addFlag = true;
  }
}
