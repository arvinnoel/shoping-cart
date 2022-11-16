import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
 
constructor(private service:SharedService) { } 
ProductList:any=[];
  ngOnInit(): void {
    this.refreshProductList()
   
  }
  refreshProductList(){
    this.service.getProduct().subscribe(data=>{
      this.ProductList=data;
    });
  }
}
;
