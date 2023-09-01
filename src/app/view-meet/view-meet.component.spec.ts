import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMeetComponent } from './view-meet.component';

describe('ViewMeetComponent', () => {
  let component: ViewMeetComponent;
  let fixture: ComponentFixture<ViewMeetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMeetComponent]
    });
    fixture = TestBed.createComponent(ViewMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
