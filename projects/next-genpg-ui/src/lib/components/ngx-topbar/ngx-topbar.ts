import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../layouts/services/layout';

@Component({
  selector: 'lib-ngx-topbar',
  imports: [RouterModule, CommonModule, StyleClassModule],
  templateUrl: './ngx-topbar.html',
  styleUrl: './ngx-topbar.css',
})
export class NgxTopbar {
 items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
