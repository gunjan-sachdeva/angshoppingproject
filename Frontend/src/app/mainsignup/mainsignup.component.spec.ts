import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsignupComponent } from './mainsignup.component';

describe('MainsignupComponent', () => {
  let component: MainsignupComponent;
  let fixture: ComponentFixture<MainsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
