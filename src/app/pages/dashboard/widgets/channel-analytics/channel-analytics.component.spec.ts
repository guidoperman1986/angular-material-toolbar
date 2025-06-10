import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAnalyticsComponent } from './channel-analytics.component';

describe('ChannelAnalyticsComponent', () => {
  let component: ChannelAnalyticsComponent;
  let fixture: ComponentFixture<ChannelAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
