import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSareeComponent } from './women-saree.component';

describe('WomenSareeComponent', () => {
  let component: WomenSareeComponent;
  let fixture: ComponentFixture<WomenSareeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenSareeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenSareeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
