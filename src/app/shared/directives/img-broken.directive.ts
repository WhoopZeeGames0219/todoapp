import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(){

    const element = this.elHost.nativeElement;
    element.src = 'https://demofree.sirv.com/nope-not-here.jpg'
  }

  constructor(private elHost:ElementRef) { }

}
