import { Component, Input } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'lib-ngx-divider',
  imports: [DividerModule],
  templateUrl: './ngx-divider.html',
  styleUrl: './ngx-divider.css',
})
export class NgxDivider {
  @Input() align: 'left' | 'center' | 'right' | 'top' | 'bottom' = 'center';
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input() type: 'solid' | 'dashed' | 'dotted' = 'solid';
}
