import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit, Self, Optional, SkipSelf, Host } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    console.log("product basladi");
    this.productService?.getProducts().subscribe(data=>{
      this.products=data;
    });

    console.log("product bitti");
  }

}
