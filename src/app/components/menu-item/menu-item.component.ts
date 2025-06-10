import { Component, inject, input, signal } from '@angular/core';
import { MenuItem } from '../custom-sidenav/custom-sidenav.component';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  imports: [
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px' })),
      ]),
    ]),
  ],

})
export class MenuItemComponent {
  item = input.required<MenuItem>();
  collapsed = input(false);
  nestedMenuOpen = signal(false);
  router = inject(Router);

  ngOnInit(): void {
    this.toggleNestedOnRouteSelected();
    }

  toggleNestedOnRouteSelected() {
    const routeSections = this.router.url.split('/');

    if (
      this.item().subitems?.length &&
      this.item().route === routeSections[1] &&
      this.item().subitems?.some((item) =>
        item.route?.includes(routeSections[2])
      )
    ) {
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}

  toggleNested() {
    if (!this.item().subitems) {
      return;
    }

    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
