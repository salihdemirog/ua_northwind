import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'',
    component:MainLayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'product',
        loadChildren : ()=> import('./pages/product/product.module').then(t=>t.ProductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
