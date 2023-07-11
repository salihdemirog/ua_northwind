import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";
import { tap } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductService {

  constructor(private httpClient: HttpClient) {

  }

  getProducts() {
    
   return this.httpClient.get<Product[]>('http://localhost:3000/products')
   .pipe(
    tap(data=>console.log(data))
    );
  }
}
