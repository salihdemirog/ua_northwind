import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {

  searched(ev:string){

    if(ev.includes('script'))
      throw new Error("Aranmak istenen ifade hatalıdır");
      
    alert(ev);
  }
}
