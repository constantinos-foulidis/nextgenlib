import { Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'lib-ngx-content-img',
  imports: [ImageModule],
  templateUrl: './ngx-content-img.html',
  styleUrl: './ngx-content-img.css',
})
export class NgxContentImg {
  @Input() imgSrc: string = '';
  @Input() alt: string = 'Content Image';
}
