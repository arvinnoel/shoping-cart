import { Component, Input, OnInit } from '@angular/core';
import {CartService} from 'src/app/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent implements OnInit {


  constructor(private service:CartService) { }

  @Input() emp:any;
  Email: string | undefined;
  Password:string | undefined;

  ngOnInit(): void {
    this.Email;
  }
  
}
