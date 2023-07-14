import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'ua-core';
import { AuthService } from 'ua-core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user?: User | null;

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private translateService: TranslateService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getActiveUser();
  }

  search(val: any) {
    this.searchEvent.emit(val);
  }

  changeLang(lang: string) {
    console.log(lang);
    this.translateService.setDefaultLang(lang);

    this.translateService.use(lang).subscribe();
  }
}
