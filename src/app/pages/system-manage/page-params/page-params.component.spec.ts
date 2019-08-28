import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParamsComponent } from './page-params.component';

describe('PageParamsComponent', () => {
  let component: PageParamsComponent;
  let fixture: ComponentFixture<PageParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
