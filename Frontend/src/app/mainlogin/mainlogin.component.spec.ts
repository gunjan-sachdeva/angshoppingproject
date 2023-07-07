import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainloginComponent } from './mainlogin.component';

describe('MainloginComponent', () => {
  let component: MainloginComponent;
  let fixture: ComponentFixture<MainloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
