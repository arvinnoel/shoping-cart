import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  getProducts() {
    throw new Error('Method not implemented.');
  }

  //items: Product[] = [];
  
  constructor(
    private http: HttpClient
  ) {}

 // addToCart(product: Product) {
    //this.items.push(product);
    
    
  }
 
  
  

  //getItems() {
  //  return this.items;
  //}

  //clearCart() {
    //this.items = [];
   // return this.items;
  //}
//}