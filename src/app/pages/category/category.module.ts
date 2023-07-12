import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    CategoryListComponent
  ]
})
export class CategoryModule { }
