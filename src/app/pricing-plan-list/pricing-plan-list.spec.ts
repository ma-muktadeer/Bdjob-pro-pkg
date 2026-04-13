import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlanList } from './pricing-plan-list';

describe('PricingPlanList', () => {
  let component: PricingPlanList;
  let fixture: ComponentFixture<PricingPlanList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingPlanList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlanList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
