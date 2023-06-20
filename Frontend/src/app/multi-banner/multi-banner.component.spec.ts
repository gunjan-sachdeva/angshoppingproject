import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBannerComponent } from './multi-banner.component';

describe('MultiBannerComponent', () => {
  let component: MultiBannerComponent;
  let fixture: ComponentFixture<MultiBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
