import { Component, computed, Input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuItemComponent } from '../menu-item/menu-item.component';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subitems?: MenuItem[];
};

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatListModule, MatIconModule, MenuItemComponent],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
})
export class CustomSidenavComponent {
  sidenavCollapsed = signal(false);
  @Input() set collapsed(value: boolean) {
    this.sidenavCollapsed.set(value);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'dashboard',
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: 'settings',
      subitems: [
        {
          icon: 'account_circle',
          label: 'Staff',
          route: '/staff',
        },
      ],
    },
    {
      icon: 'featured_play_list',
      label: 'Features',
      route: '',
      subitems: [
        {
          icon: 'image',
          label: 'Image Upload',
          route: '/image-upload',
        },
        {
          icon: 'event',
          label: 'Calendar Events',
          route: '/calendar',
        },
        {
          icon: 'chat',
          label: 'Chat',
          route: '/chat',
        },
        {
          icon: 'transform',
          label: 'Transform Excel',
          route: '/csvtojson',
        },
      ]
    }
  ]);

  profilePicSize = computed(() => (this.sidenavCollapsed() ? '32' : '100'));

  getProfilePic() {
    return 'https://picsum.photos/200/300';
  }
}
