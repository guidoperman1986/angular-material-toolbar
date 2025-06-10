import { Component, input, signal } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Widget } from '../../interfaces/dashboard.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WidgetOptionsComponent } from "../widget-options/widget-options.component";

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgComponentOutlet, MatIconModule, MatButtonModule, WidgetOptionsComponent],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  host: {
    '[style.grid-area]': '"span "+(data().rows ?? 1) + "/ span " +(data().columns ?? 1)'
  }
})
export class WidgetComponent {
  data = input<Widget>();
  showOptions = signal(false);
}
