import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductService } from './services/product.service';
import { CategoryModule } from './pages/category/category.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './shared/core/truncate.pipe';
import { ColorDirective } from './shared/core/directives/color.directive';
import { MenuComponent } from './layouts/menu/menu.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CartModule } from './pages/cart/cart.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DashboardComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    CategoryModule,
    CartModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    // {
    //   provide:'ApiUrl',
    //   useValue:'http://localhost:3000/'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
