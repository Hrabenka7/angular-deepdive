import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appOrangeBackground]'
})

export class OrangeBackgroundDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  /** access without Renderer
   ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
  } */

  ngOnInit() {}

  @HostListener('mouseover') onMouseOver(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
  }

  @HostListener('mouseout') onMouseOut(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
