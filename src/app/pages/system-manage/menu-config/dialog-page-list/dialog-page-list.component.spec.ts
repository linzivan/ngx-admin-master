import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPageListComponent } from './dialog-page-list.component';

describe('DialogPageListComponent', () => {
  let component: DialogPageListComponent;
  let fixture: ComponentFixture<DialogPageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
