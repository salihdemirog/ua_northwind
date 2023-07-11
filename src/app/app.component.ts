import { Component, Inject, OnInit, Injector, inject } from '@angular/core';
import { ProductService } from './services/product.service';
import { ApiLogService, FileLogService, LogService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    LogService,
    //  FileLogService,
    //  {
    //   provide:LogService,
    //   useExisting:FileLogService
    //  }
    // {
    //   provide: 'logger',
    //   // useClass: ApiLogService,
    //   // useValue:{
    //   //   logType:'abc logger',
    //   //   log:()=>console.log('Deneme')
    //   // }
    //   useExisting:new LogService()
    // }
    {
      provide: 'logger',
      useFactory: (logService: LogService) => {

        logService.log();

        return new FileLogService();
      },
      deps: [LogService]
    }
  ],

})
export class AppComponent implements OnInit {

  constructor(private injector: Injector) {}

  // constructor(@Inject('logger') private logService: LogService) { }

  // ngOnInit(): void {
  //   console.log(this.logService.logType);
  //   this.logService.log();
  // }

  ngOnInit(): void {

   let logService=this.injector.get('logger');

  logService.log();
 
  }
}
