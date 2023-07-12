import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';



@NgModule({
  declarations: [
    CartSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartSummaryComponent
  ]
})
export class CartModule { }
