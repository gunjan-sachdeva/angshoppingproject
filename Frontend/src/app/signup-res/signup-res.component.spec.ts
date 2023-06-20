import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupResComponent } from './signup-res.component';

describe('SignupResComponent', () => {
  let component: SignupResComponent;
  let fixture: ComponentFixture<SignupResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
