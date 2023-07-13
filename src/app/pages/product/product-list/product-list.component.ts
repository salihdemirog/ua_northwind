import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit, Self, Optional, SkipSelf, Host } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { EventService } from 'src/app/services/event.service';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private eventService:EventService) { }

  ngOnInit(): void {

    console.log(environment.apiUrl);

    // let categoryId = this.route.snapshot.paramMap.get('categoryId');
    // this.getProducts(categoryId);
    this.route.params.subscribe(param => {
      let categoryId = param["categoryId"];
      this.getProducts(categoryId);
    });

  }

  getProducts(categoryId: any) {
    this.productService.getProducts(categoryId).subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    this.cartService.add({
      product: product,
      quantity: 1
    });

    this.eventService.notify('addToCart',product);
  }

}
