import { Directive, OnInit, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRedText]'
})

export class RedTextDirective implements OnInit {
  @HostBinding ('style.color') color = 'black'; // won't work with Renderer
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}

  @HostListener('mouseover') onMouseOver(eventData: Event) {
    this.color = 'red';
  }

  @HostListener('mouseout') onMouseOut(eventData: Event) {
    this.color = 'black';
  }
}
