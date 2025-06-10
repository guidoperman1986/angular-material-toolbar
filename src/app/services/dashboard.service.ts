import { computed, effect, Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Widget } from '../interfaces/dashboard.interface';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/widgets/views/views.component';
import { WatchTimeComponent } from '../pages/dashboard/widgets/watch-time/watch-time.component';
import { RevenueComponent } from '../pages/dashboard/widgets/revenue/revenue.component';
import { ChannelAnalyticsComponent } from '../pages/dashboard/widgets/channel-analytics/channel-analytics.component';

@Injectable()
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: SubscribersComponent,
      rows: 1,
      columns: 1,
      background: '#003f5c',
      color: 'whitesmoke'
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent,
      rows: 1,
      columns: 1,
      background: '#003f5c',
      color: 'whitesmoke'
    },
    {
      id: 3,
      label: 'Watch Time',
      content: WatchTimeComponent,
      rows: 1,
      columns: 1,
      background: '#003f5c',
      color: 'whitesmoke'
    },
    {
      id: 4,
      label: 'Revenue',
      content: RevenueComponent,
      rows: 1,
      columns: 1,
      background: '#003f5c',
      color: 'whitesmoke'
    },
    {
      id: 5,
      label: 'Channel Analytics',
      content: ChannelAnalyticsComponent,
      rows: 2,
      columns: 2,      
    }
  ]);

  addedWidgets = signal<Widget[]>([]);

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(widget => widget.id);
    return this.widgets().filter(widget => !addedIds.includes(widget.id));
  })

  saveWidgets = effect(() => {
    const widgetsWithoutContent: Partial<Widget>[] = this.addedWidgets().map(widget => ({ ...widget }));
    widgetsWithoutContent.forEach(widget => { delete widget.content });

    localStorage.setItem('addedWidgets', JSON.stringify(widgetsWithoutContent));
  })

  constructor() {
    this.fetchWidgets();
  }

  fetchWidgets() {
    const storedWidgets = localStorage.getItem('addedWidgets');
    if (storedWidgets) {
      const widgets = JSON.parse(storedWidgets) as Widget[];
      widgets.forEach(widget => {
        const content = this.widgets().find(w => w.id === widget.id)?.content;
        if (content) {
          widget.content = content;
        }
      })


      this.addedWidgets.set(widgets);
    }
  }

  addWidget(widget: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...widget }]);
  }

  updateWidget(id: number, widget: Partial<Widget>) {
    const idx = this.addedWidgets().findIndex(w => w.id === id);
    if (idx !== -1) {
      const newWidgets = [...this.addedWidgets()];
      newWidgets[idx] = { ...newWidgets[idx], ...widget };
      this.addedWidgets.set(newWidgets);
    }
  }

  moveWidgetToTheRight(id: number) {
    const idx = this.addedWidgets().findIndex(w => w.id === id);
    console.log(idx);
    if (idx !== this.addedWidgets().length - 1) {
      const newWidgets = [...this.addedWidgets()];
      const widget = newWidgets[idx];
      newWidgets.splice(idx, 1);
      newWidgets.splice(idx + 1, 0, widget);
      this.addedWidgets.set(newWidgets);
    }
  }

  moveWidgetToTheLeft(id: number) {
    const idx = this.addedWidgets().findIndex(w => w.id === id);
    console.log(idx);
    if (idx !== 0) {
      const newWidgets = [...this.addedWidgets()];
      const widget = newWidgets[idx];
      newWidgets.splice(idx, 1);
      newWidgets.splice(idx - 1, 0, widget);
      this.addedWidgets.set(newWidgets);
    }
  }

  removeWidget(id: number) {
    this.addedWidgets.set(this.addedWidgets().filter(w => w.id !== id));
  }
}
