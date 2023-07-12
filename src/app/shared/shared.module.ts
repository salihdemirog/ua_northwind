import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './core/truncate.pipe';
import { ColorDirective } from './core/directives/color.directive';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TruncatePipe,
    ColorDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    TruncatePipe,
    ColorDirective,
    TranslateModule
  ]
})
export class SharedModule { }
