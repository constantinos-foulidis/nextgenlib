import { Component, ElementRef } from '@angular/core';
import { Menu } from '../menu/menu';
@Component({
  selector: 'lib-sidebar',
  imports: [Menu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
constructor(public el: ElementRef) {}
}
