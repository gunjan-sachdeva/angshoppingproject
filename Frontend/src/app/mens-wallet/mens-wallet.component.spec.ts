import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWalletComponent } from './mens-wallet.component';

describe('MensWalletComponent', () => {
  let component: MensWalletComponent;
  let fixture: ComponentFixture<MensWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
