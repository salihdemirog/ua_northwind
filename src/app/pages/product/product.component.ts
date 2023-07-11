import { Component, OnInit, Optional } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-product',
    template: `<router-outlet></router-outlet>`,
})

export class ProductComponent implements OnInit {
    constructor() {}

    ngOnInit() { }
}