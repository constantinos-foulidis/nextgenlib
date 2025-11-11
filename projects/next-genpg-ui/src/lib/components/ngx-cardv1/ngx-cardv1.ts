import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-cardv1',
  imports: [],
  templateUrl: './ngx-cardv1.html',
  styleUrl: './ngx-cardv1.css',
})
export class NgxCardv1 {
  @Input() imgSrc: string = '';
  @Input() alt: string = 'Card Image';
}
