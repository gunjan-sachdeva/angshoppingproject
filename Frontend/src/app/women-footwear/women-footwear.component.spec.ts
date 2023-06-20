import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenFootwearComponent } from './women-footwear.component';

describe('WomenFootwearComponent', () => {
  let component: WomenFootwearComponent;
  let fixture: ComponentFixture<WomenFootwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenFootwearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
