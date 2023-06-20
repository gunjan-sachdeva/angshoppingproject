import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensAccessoriesComponent } from './mens-accessories.component';

describe('MensAccessoriesComponent', () => {
  let component: MensAccessoriesComponent;
  let fixture: ComponentFixture<MensAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
