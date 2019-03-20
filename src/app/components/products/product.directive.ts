import { Directive, Renderer, ElementRef, HostListener, HostBinding } from '@angular/core';
@Directive({
    selector: '[productDir]'
})
export class ProductDirective {
    constructor(private render: Renderer, private el: ElementRef) {

    }
   /*  @HostListener('mouseenter') onclick() {
        this.render.setElementStyle(this.el.nativeElement, 'backgroundColor', 'red');
        this.height = '3000px';
    }
     @HostListener('mouseleave') mouselive(){
         this.height = '100%'
    }
    @HostBinding('style.height') height:string; */


}