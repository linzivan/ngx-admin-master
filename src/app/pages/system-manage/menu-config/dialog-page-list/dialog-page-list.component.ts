import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'ngx-dialog-page-list',
  templateUrl: './dialog-page-list.component.html',
  styleUrls: ['./dialog-page-list.component.scss']
})
export class DialogPageListComponent implements OnInit {

  constructor(protected ref: NbDialogRef<DialogPageListComponent>) {}
  selectedMenu;
  ngOnInit() {
  }
  linkPage(event) {
    this.ref.close(event);
  }

}
