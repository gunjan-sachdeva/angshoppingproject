import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaaderComponent } from './heaader.component';

describe('HeaaderComponent', () => {
  let component: HeaaderComponent;
  let fixture: ComponentFixture<HeaaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
