import { Component, Input } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { EventItem } from './models/timelineModel';
@Component({
  selector: 'lib-ngx-timeline',
  imports: [TimelineModule, CardModule,ButtonModule],
  templateUrl: './ngx-timeline.html',
  styleUrl: './ngx-timeline.css',
})
export class NgxTimeline {
 @Input() events: EventItem[] = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg',description:'Lorem ipsum',subHeader: 'this is subheader' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7', description:'Lorem ipsum', subHeader: 'this is subheader' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800', description:'Lorem ipsum', subHeader: 'this is subheader' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B', description:'Lorem ipsum', subHeader: 'this is subheader' }
        ];;
}
