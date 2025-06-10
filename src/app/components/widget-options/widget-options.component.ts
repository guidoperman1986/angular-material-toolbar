import { Component, inject, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Widget } from '../../interfaces/dashboard.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-widget-options',
  imports: [MatIconModule, MatButtonModule, MatButtonToggleModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.scss'
})
export class WidgetOptionsComponent {
  showOptions = model<boolean>(false);
  data = model<Widget>();
  store = inject(DashboardService);
}
