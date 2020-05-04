import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appTrackScroller]'
})
export class TrackScrollerDirective implements OnInit {

  constructor() { }

  @Output() scrollHorizontal = new EventEmitter();
  @Output() scrollVertical = new EventEmitter();
  @Input() element: ElementRef;

  ngOnInit(): void {
    this.scrollHorizontal.emit(0);
    this.scrollVertical.emit(0);
  }

  @HostListener('scroll', ['$event'])
  onScroll($event: Event): void {
    this.scrollHorizontal.emit(this.element.nativeElement.scrollLeft);
    this.scrollVertical.emit(this.element.nativeElement.scrollTop);
  }
}
