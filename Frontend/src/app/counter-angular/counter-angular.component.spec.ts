import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAngularComponent } from './counter-angular.component';

describe('CounterAngularComponent', () => {
  let component: CounterAngularComponent;
  let fixture: ComponentFixture<CounterAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
