import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanScheduleComponent } from './plan-schedule.component';

describe('PlanScheduleComponent', () => {
  let component: PlanScheduleComponent;
  let fixture: ComponentFixture<PlanScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
