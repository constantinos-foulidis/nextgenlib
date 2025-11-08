import { Component, Input, Type } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'lib-ngx-menubar',
  imports: [MenubarModule, CommonModule,MenuModule],
  templateUrl: './ngx-menubar.html',
})
export class NgxMenubar {
  @Input() items: MenuItem[] = [];
  //  items1 = [
  //      {
  //               label: 'Router',
  //               icon: 'pi pi-palette',
  //               items: [
  //                   {
  //                       label: 'Installation',
  //                       routerLink: '/installation'
  //                   },
  //                   {
  //                       label: 'Configuration',
  //                       routerLink: '/configuration'
  //                   }
  //               ]
  //           },
  //           {
  //               label: 'Home',
  //               icon: 'pi pi-home',
  //           },
  //           {
  //               label: 'Projects',
  //               icon: 'pi pi-search',
  //               badge: '3',
  //               items: [
  //                   {
  //                       label: 'Core',
  //                       icon: 'pi pi-bolt',
  //                       shortcut: '⌘+S',
  //                   },
  //                   {
  //                       label: 'Blocks',
  //                       icon: 'pi pi-server',
  //                       shortcut: '⌘+B',
  //                   },
  //                   {
  //                       separator: true,
  //                   },
  //                   {
  //                       label: 'UI Kit',
  //                       icon: 'pi pi-pencil',
  //                       shortcut: '⌘+U',
  //                   },
  //               ],
  //           },
  //       ];
}
