import { ElementSchemaRegistry } from '@angular/compiler';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNav]'
})
export class NavDirective {

  constructor(private eleRef : ElementRef, private renedere2: Renderer2) { }
  @HostListener( 'document:scroll' ) onScroll (){
    console.log(window.scrollY)
    if(window.scrollY > 360) {
      this.renedere2.removeClass(this.eleRef.nativeElement, 'hide-sticky-nav')
    } else {
      this.renedere2.addClass(this.eleRef.nativeElement, 'hide-sticky-nav')
    }
  }
}
