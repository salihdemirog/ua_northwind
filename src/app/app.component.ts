import { Component, Inject, OnInit, Injector, inject } from '@angular/core';
import { ProductService } from './services/product.service';
import { ApiLogService, FileLogService, LogService } from './services/test.service';
import { Observable, Subscription, asyncScheduler, first, interval, last, map, max, observeOn, of } from 'rxjs';

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

  constructor(private injector: Injector) { }

  // constructor(@Inject('logger') private logService: LogService) { }

  // ngOnInit(): void {
  //   console.log(this.logService.logType);
  //   this.logService.log();
  // }

  ngOnInit(): void {

    let logService = this.injector.get('logger');

    logService.log();


    // const observable = new Observable<number>((subscription) => {
    //   subscription.next(1);
    //   subscription.next(2);
    //   subscription.next(3);
    //   subscription.next(4);

    //   setTimeout(() => {
    //     subscription.next(5);
    //     subscription.complete();
    //   }, 5000);

    // });

    // const observable = interval(1000);

    // const observable = of(1,2,3,4)
    // .pipe(
    //   map(x=>x*x),
    //   // first()
    //   last()
    //   // max()
    // );

    const observable = of(1, 2, 3, 4, 5, 6, 7)
    .pipe(observeOn(asyncScheduler));

    const observer = {
      next(v: any) {
        console.log(`observer1 Gelen veri ${v}`);
      },
      error(e: any) {
        console.error(`observer1 Hata oluştu ${e}`);
      },
      complete() {
        console.warn('observer1 Tamamlandı')
      }
    };

    console.log('Başladı');
    const subscription1 = observable.subscribe(observer);
    console.log('Bitti');
    // const subscription2 = observable.subscribe({
    //   next(v: any) {
    //     console.log(`observer2 Gelen veri ${v}`);

    //     if (v == 5)
    //       subscription1.unsubscribe();
    //   },
    //   error(e: any) {
    //     console.error(`observer2 Hata oluştu ${e}`);
    //   },
    //   complete() {
    //     console.warn('observer2 Tamamlandı')
    //   }
    // });
  }
}
