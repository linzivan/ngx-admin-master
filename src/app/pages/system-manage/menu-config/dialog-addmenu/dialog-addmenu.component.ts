import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'ngx-dialog-addmenu',
  templateUrl: './dialog-addmenu.component.html',
  styleUrls: ['./dialog-addmenu.component.scss']
})
export class DialogAddmenuComponent implements OnInit {

  constructor(protected ref: NbDialogRef<DialogAddmenuComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }

  ngOnInit(): void {
  }
}
