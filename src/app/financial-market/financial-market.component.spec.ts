import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialMarketComponent } from './financial-market.component';

describe('FinancialMarketComponent', () => {
  let component: FinancialMarketComponent;
  let fixture: ComponentFixture<FinancialMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
