import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductService {

  baseApiUrl:string=`${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) {

  }

  getProducts(categoryId?: number) {

    let url = this.baseApiUrl;

    if (categoryId)
      url += `?categoryId=${categoryId}`

    return this.httpClient.get<Product[]>(url)
      .pipe(
        tap(data => console.log(data))
      );
  }
}
