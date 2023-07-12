import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private translateService: TranslateService) { }

  search(val: any) {
    this.searchEvent.emit(val);
  }

  changeLang(lang: string) {
    console.log(lang);
    this.translateService.setDefaultLang(lang);

    this.translateService.use(lang).subscribe();
  }
}
