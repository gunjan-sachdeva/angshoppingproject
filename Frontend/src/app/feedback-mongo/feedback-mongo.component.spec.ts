import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackMongoComponent } from './feedback-mongo.component';

describe('FeedbackMongoComponent', () => {
  let component: FeedbackMongoComponent;
  let fixture: ComponentFixture<FeedbackMongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackMongoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
