import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddmenuComponent } from './dialog-addmenu.component';

describe('DialogAddmenuComponent', () => {
  let component: DialogAddmenuComponent;
  let fixture: ComponentFixture<DialogAddmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
