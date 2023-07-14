import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductService } from './services/product.service';
import { CategoryModule } from './pages/category/category.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ColorDirective } from './shared/core/directives/color.directive';
import { MenuComponent } from './layouts/menu/menu.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CartModule } from './pages/cart/cart.module';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { JwtTokenInterceptor } from './shared/core/interceptors/jwt-token.interceptor';
import { GlobalErrorHandler } from './shared/core/handler/global-error-handler';
import { MessageService } from 'primeng/api';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    DashboardComponent,
    MenuComponent,
    EmptyLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    },
    {
      provide:ErrorHandler,
      useClass:GlobalErrorHandler,
      deps:[MessageService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
