import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {PageListData} from '../../../@core/data/page-list';
import {Router} from '@angular/router';
import {NbComponentStatus} from "@nebular/theme";
import {PageListTableSetings} from "./pageList-tableConfig";
import {GetMenuListService} from "../service/get-menu-list.service";
import {removeSummaryDuplicates} from "@angular/compiler";

@Component({
  selector: 'ngx-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent implements OnInit, OnChanges {
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  @Input() menuItem; // 父级别菜单
  @Output() selectPage = new EventEmitter<any>(); // 选中的页面
  ngOnInit() {
    this.loadMenuList();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.menuItem = changes.menuItem.currentValue;
  }
  settings = this.tbSettings.settings;

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: PageListData,
              private route: Router,
              private tbSettings: PageListTableSetings,
              private getMenuListService: GetMenuListService) {
  }
  loadMenuList() {
    this.getMenuListService.getMenuList().subscribe(data => {
      if (data) {
        this.source.load(data);
      }
    });
  }
  onDeleteConfirm(event): void {
    this.selectPage.emit(event.data);
  }
}
