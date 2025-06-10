import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-channel-analytics',
  imports: [MatButtonModule],
  templateUrl: './channel-analytics.component.html',
  styleUrl: './channel-analytics.component.scss'
})
export class ChannelAnalyticsComponent implements OnInit {
  chart = viewChild.required<ElementRef>('chart');

  ngOnInit(): void {
   new Chart(this.chart().nativeElement, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Views',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      /* plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      } */
    }
   }) 
  }
}
