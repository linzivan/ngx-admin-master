import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'ngx-page-params',
  templateUrl: './page-params.component.html',
  styleUrls: ['./page-params.component.scss'],
})
export class PageParamsComponent implements OnInit {
  checkoutForm;
  item;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      menu_desc: '',
      redirecturl: '',
      image_url: '',
      showdesktop: '',
      showmobile: '',
    });
  }

  ngOnInit() {
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    // this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
