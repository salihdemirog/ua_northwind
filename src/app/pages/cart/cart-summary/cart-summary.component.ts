import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {


  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService,
    private eventService: EventService) { }

  ngDoCheck(): void {
    // this.totalPrice= this.cartService.totalPrice;
    // this.totalQuantity= this.cartService.totalQuantity;
  }

  ngOnInit(): void {
    this.setCartSummary();

    this.eventService.subscribe('addToCart', data => {
      this.setCartSummary();
      console.log('eklenen ürün',data);
    });
  }

  setCartSummary() {
    this.totalPrice = this.cartService.totalPrice;
    this.totalQuantity = this.cartService.totalQuantity;
  }

}
