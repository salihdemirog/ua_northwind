import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  constructor() {
    let cartStorage = localStorage.getItem('cart');
    if (cartStorage) {
      this.cart = JSON.parse(cartStorage);
    }
  }

  add(cartItem: CartItem) {
    let item = this.cart.find(t => t.product.id == cartItem.product.id);
    if (item)
      item.quantity += cartItem.quantity;
    else
      this.cart.push(cartItem);

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public get totalQuantity(): number {
    return this.cart.reduce((p, c) => p + c.quantity, 0);
  }

  public get totalPrice(): number {
    return this.cart.reduce((p, c) => p + c.quantity * c.product.price!, 0);
  }
}
