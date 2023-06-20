import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseFetchComponent } from './firebase-fetch.component';

describe('FirebaseFetchComponent', () => {
  let component: FirebaseFetchComponent;
  let fixture: ComponentFixture<FirebaseFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseFetchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
