import { Directive, ElementRef,Input } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorDirective {

  @Input() 
  public set color(v : string) {
    this.changeColor(v);
  }
  

  constructor(private el: ElementRef) {
    this.changeColor('black');
  }

  changeColor(c: string) {
    this.el.nativeElement.style.color = c;
  }

}
