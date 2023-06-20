import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensSuitsComponent } from './mens-suits.component';

describe('MensSuitsComponent', () => {
  let component: MensSuitsComponent;
  let fixture: ComponentFixture<MensSuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensSuitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensSuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
