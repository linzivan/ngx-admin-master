import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NbComponentStatus, NbIconLibraries} from "@nebular/theme";
import {Router} from "@angular/router";
import {UpdateMenuService} from "../service/update-menu.service";

@Component({
  selector: 'ngx-page-params',
  templateUrl: './page-params.component.html',
  styleUrls: ['./page-params.component.scss'],
})
export class PageParamsComponent implements OnInit, OnChanges {
  @Input() menuItem;
  checkoutForm;
  item;
  evaIcons;
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  constructor(private formBuilder: FormBuilder,
              iconsLibrary: NbIconLibraries,
              private updateMenuService: UpdateMenuService,
              private route: Router) {
    /*
    * *Nb图标
    * *
    * */
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    /*
    * *{
      name: '',
      menu_desc: '',
      menu_type: '',
      redirecturl: '',
      image_url: '',
      showdesktop: true,
      showmobile: false,
      active: true,
    }
    * */
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkoutForm = this.formBuilder.group(changes.menuItem.currentValue);
  }
  onSubmit(customerData) {
    // Process checkout data here
    this.updateMenuService.updateMenu(customerData).subscribe(result => {
      // 可加判断
    });
  }
}
