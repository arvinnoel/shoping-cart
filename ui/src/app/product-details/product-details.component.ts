import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
addToCart(arg0: any) {
throw new Error('Method not implemented.');
}

 // product: Product | undefined;
isVisible: any;
product: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
   
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    
    //this.product = products.find(product => product.id === productIdFromRoute);
  }

 /* addToCart(product: Product): void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500) 
    this.cartService.addToCart(product);
    {}
  }*/
}
