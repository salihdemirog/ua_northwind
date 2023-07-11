import { Component, OnInit, Self, Optional, SkipSelf, Host } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
      this.productService?.getProducts();
  }

}
