import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NbComponentStatus, NbIconLibraries} from "@nebular/theme";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-page-params',
  templateUrl: './page-params.component.html',
  styleUrls: ['./page-params.component.scss'],
})
export class PageParamsComponent implements OnInit {
  checkoutForm;
  item;
  evaIcons;
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  // //
  // //
  constructor(private formBuilder: FormBuilder,
              iconsLibrary: NbIconLibraries,
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
    const current_menu = JSON.parse(localStorage.getItem('current_menu'));
    /*
    * * 响应式表单
    * *
    * */
    this.checkoutForm = this.formBuilder.group({
      name: '',
      menu_desc: '',
      type: '',
      redirecturl: '',
      image_url: '',
      showdesktop: true,
      showmobile: false,
      active: true,
    });
  }

  ngOnInit() {
    this.get_current_menu_info();
  }
  get_current_menu_info() {
    const current_menu = JSON.parse(localStorage.getItem('current_menu'));
    if (current_menu) {
      this.checkoutForm = this.formBuilder.group(current_menu);
    }
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    // this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    // TODO: 提交数据
    this.route.navigate(['/pages/system-manage/page-config']);
  }
}
