import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { btnVariant } from './models/btnvariant';
import { buttonLabel } from './models/btnLabel';
import { btnSize } from './models/btnSize';

@Component({
  selector: 'lib-ngx-button',
  imports: [ButtonModule],
  templateUrl: './ngx-button.html',
})
export class NgxButton {
  @Input() label?: buttonLabel;
  @Input() icon?: string;
  @Input() disabled?: boolean = false;
  @Input() raised?: boolean = false;
  @Input() rounded?: boolean = false;
  @Input() variant?: btnVariant = ''
  @Input() badge?: string;
  @Input() size?: btnSize;
}
