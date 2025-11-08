import { Component, ViewChild, ViewContainerRef,Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgxButton } from '../ngx-button/ngx-button';
import { ConfigCard } from './models/configCard';
@Component({
  selector: 'lib-ngx-card',
  imports: [CardModule, NgxButton],
  templateUrl: './ngx-card.html',
})
export class NgxCard {
  @Input() config!: ConfigCard;
 @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;
ngAfterViewInit() {

      if (this.config.contentComponent) {
        const ref = this.dynamicContainer.createComponent(this.config.contentComponent.component);
        if (this.config.contentComponent.data) Object.assign(ref.instance as object, this.config.contentComponent.data);
      }
    };
  }

