import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlan } from './pricing-plan';

describe('PricingPlan', () => {
  let component: PricingPlan;
  let fixture: ComponentFixture<PricingPlan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPlan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
