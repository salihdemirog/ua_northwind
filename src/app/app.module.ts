import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductService } from './services/product.service';
import { CategoryModule } from './pages/category/category.module';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './shared/core/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    CategoryModule,
    HttpClientModule
  ],
  // providers: [
  //   ProductService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
