import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() scrollHorizontal: number;
  @Input() scrollVertical: number;

  @ViewChild('container', { static: true }) containerRef: ElementRef;

  setVerticalScroll(event) {
    console.log('Vertical Scroll: ', event);
  }

  setHorizontalScroll(event) {
    console.log('Horizontal Scroll: ', event);
  }
}
