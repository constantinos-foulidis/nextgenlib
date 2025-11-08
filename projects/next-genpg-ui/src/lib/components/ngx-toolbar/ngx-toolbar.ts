import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { NgxButton } from '../ngx-button/ngx-button';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { ToolbarConfig, ToolbarItem } from './models/toolbarConfig';
@Component({
  selector: 'lib-ngx-toolbar',
  imports: [ToolbarModule,NgxButton,CommonModule,ButtonModule,AvatarModule,MenuModule],
  templateUrl: './ngx-toolbar.html',
})
export class NgxToolbar {
  //  toolbarConfig: ToolbarConfig = {
  //   logo: { type: 'image', imageUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
  //   items: [
  //     { kind: 'button', label: 'Files', action: () => console.log('Files clicked') },
  //     { kind: 'menu', label: 'Edit', items: [{ label: 'Cut', action: () => console.log('Cut') }] },
  //     { kind: 'component', component: SomeDynamicWidgetComponent, data: { title: 'Widget', value: 99 } },
  //   ],
  // };
  @Input({ required: true }) config!: ToolbarConfig;

  @ViewChild('dynamicContainer', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;

  @ViewChild('logoContainer', { read: ViewContainerRef })
  logoContainer!: ViewContainerRef;

  ngAfterViewInit() {
    // Render dynamic logo component
    if (this.config.logo?.type === 'component') {
      const ref = this.logoContainer.createComponent(this.config.logo.component);
      if (this.config.logo.data) Object.assign(ref.instance, this.config.logo.data);
    }

    // Render any Component items dynamically
    this.config.items?.forEach(item => {
      if (item.kind === 'component') {
        const ref = this.dynamicContainer.createComponent(item.component);
        if (item.data) Object.assign(ref.instance, item.data);
      }
    });
  }

  /** Helper to determine item type */
 get logoWidth(): string {
  const logo = this.config.logo;
  if (!logo) return '31';
  if (logo.type === 'svg' || logo.type === 'image') {
    return logo.width ?? '31';
  }
  return 'auto'; // for component type
}

get logoHeight(): string {
  const logo = this.config.logo;
  if (!logo) return '33';
  if (logo.type === 'svg' || logo.type === 'image') {
    return logo.height ?? '33';
  }
  return 'auto';
}
get svgLogo(): { svgPath: string; width?: string; height?: string } | null {
  const logo = this.config.logo;
  if (logo?.type === 'svg') {
    return logo;
  }
  return null;
}

get imageLogo(): { imageUrl: string; width?: string; height?: string; alt?: string } | null {
  const logo = this.config.logo;
  if (logo?.type === 'image') {
    return logo;
  }
  return null;
}
}
