import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { CustomSidenavComponent } from '../../components/custom-sidenav/custom-sidenav.component';
import { ToolbarMenuComponent } from '../../components/toolbar-menu/toolbar-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    CustomSidenavComponent,
    MatMenuModule,
    ToolbarMenuComponent,
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? '70px' : '250px'));
}
