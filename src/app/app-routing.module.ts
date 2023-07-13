import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { authCanActivatedGuardFn, authCanMatchGuard } from './shared/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'product',
        loadChildren: () => import('./pages/product/product.module').then(t => t.ProductModule)
      },
    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: 'account',
        loadChildren: () => import('./pages/account/account.module').then(t => t.AccountModule)
      },
      {
        path: 'admin',
        // canActivate:[authCanActivatedGuardFn],
        canMatch: [authCanMatchGuard],
        loadChildren: () => import('./pages/admin/admin.module').then(t => t.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
