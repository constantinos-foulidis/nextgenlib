import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { btnVariant } from './models/btnvariant';
import { buttonSeverity } from './models/btnLabel';
import { btnSize } from './models/btnSize';

@Component({
  selector: 'lib-ngx-button',
  imports: [ButtonModule],
  templateUrl: './ngx-button.html',
})
export class NgxButton {
  @Input() label?: string;
  @Input() severity: buttonSeverity = 'primary';
  @Input() icon?: string;
  @Input() disabled?: boolean = false;
  @Input() raised?: boolean = false;
  @Input() rounded?: boolean = false;
  @Input() variant?: btnVariant = ''
  @Input() badge?: string;
  @Input() size?: btnSize;
  @Output() onClick = new EventEmitter<MouseEvent>();
}
