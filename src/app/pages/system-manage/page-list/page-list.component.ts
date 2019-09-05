import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {PageListData} from '../../../@core/data/page-list';
import {Router} from '@angular/router';
import {NbComponentStatus} from "@nebular/theme";
import {PageListTableSetings} from "./pageList-tableConfig";

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
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.menuItem = changes.menuItem.currentValue;
  }
  settings = this.tbSettings.settings;

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: PageListData,
              private route: Router,
              private tbSettings: PageListTableSetings) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    // TODO: HTTPAPI接口 更新成功后发消息给父组件
    this.selectPage.emit(event.data);
  }
}
