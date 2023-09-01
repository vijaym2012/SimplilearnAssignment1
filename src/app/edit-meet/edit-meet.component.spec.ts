import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeetComponent } from './edit-meet.component';

describe('EditMeetComponent', () => {
  let component: EditMeetComponent;
  let fixture: ComponentFixture<EditMeetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMeetComponent]
    });
    fixture = TestBed.createComponent(EditMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
