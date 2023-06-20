import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenTrouserComponent } from './men-trouser.component';

describe('MenTrouserComponent', () => {
  let component: MenTrouserComponent;
  let fixture: ComponentFixture<MenTrouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenTrouserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenTrouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
