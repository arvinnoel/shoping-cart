import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  //items = this.cartService.getItems();
  //public grandTotal !: number;
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
abc: any;
items: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    
    //this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
