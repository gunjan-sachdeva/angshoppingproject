import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackMaterialComponent } from './feedback-material.component';

describe('FeedbackMaterialComponent', () => {
  let component: FeedbackMaterialComponent;
  let fixture: ComponentFixture<FeedbackMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
