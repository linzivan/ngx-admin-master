import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConfigComponent } from './menu-config.component';

describe('MenuConfigComponent', () => {
  let component: MenuConfigComponent;
  let fixture: ComponentFixture<MenuConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
