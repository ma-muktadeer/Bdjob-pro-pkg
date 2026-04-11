import { Component, input } from '@angular/core';
import { PricingPlanInterface } from '../interfaces/card.interfaces';

@Component({
  selector: 'app-pricing-plan',
  imports: [],
  templateUrl: './pricing-plan.html',
  styleUrl: './pricing-plan.css',
})
export class PricingPlan {
  plan = input.required<PricingPlanInterface>();


}
