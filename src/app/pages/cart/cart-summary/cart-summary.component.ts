import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {


  totalPrice:number=0;
  totalQuantity:number=0;

  constructor(private cartService:CartService){}

  ngDoCheck(): void {
    this.totalPrice= this.cartService.totalPrice;
    this.totalQuantity= this.cartService.totalQuantity;
  }

  ngOnInit(): void {


 
  }

}
