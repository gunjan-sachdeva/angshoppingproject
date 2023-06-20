import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedComponent } from './placed.component';

describe('PlacedComponent', () => {
  let component: PlacedComponent;
  let fixture: ComponentFixture<PlacedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
