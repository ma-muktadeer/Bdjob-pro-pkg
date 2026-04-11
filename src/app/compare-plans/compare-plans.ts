import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plan {
  id: string;
  name: string;
  price: number;
  isCurrent?: boolean;
  isRecommended?: boolean;
  upgradeText: string;
}

interface Feature {
  name: string;
  isNew?: boolean;
  hasTooltip?: boolean;
  values: (string | number | boolean)[];
}

@Component({
  selector: 'app-compare-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compare-plans.html',
  styleUrl: './compare-plans.css',
})
export class ComparePlans {
  durations = [
    { id: 'monthly', label: 'Monthly' },
    { id: 'quarterly', label: 'Quarterly', discount: 'Save upto 50%' },
    { id: 'yearly', label: 'Yearly', discount: 'Save upto 50%' }
  ];

  selectedDuration = 'monthly';

  plans: Plan[] = [
    { id: 'free', name: 'Free', price: 0, isCurrent: true, upgradeText: '' },
    { id: 'basic', name: 'Basic', price: 99, upgradeText: 'Upgrade Now' },
    { id: 'standard', name: 'Standard', price: 149, isRecommended: true, upgradeText: 'Upgrade Now' },
    { id: 'premium', name: 'Premium', price: 199, upgradeText: 'Upgrade Now' }
  ];

  // Mock pricing logic: Quarterly saves 25%, Yearly saves 50%
  getPlanPrice(plan: Plan): number {
    if (plan.id === 'free') return 0;
    const basePrice = plan.price;
    if (this.selectedDuration === 'quarterly') return Math.floor(basePrice * 0.75);
    if (this.selectedDuration === 'yearly') return Math.floor(basePrice * 0.50);
    return basePrice;
  }

  features: Feature[] = [
    { name: 'Monthly Application Limit', isNew: true, values: [75, 100, 75, 'Unlimited'] },
    { name: 'Application Boosting', hasTooltip: true, values: [false, '3 Jobs', '5 Jobs', '10 Jobs'] },
    { name: 'Direct Message to Employer', values: [false, '25 Jobs', '35 Jobs', '50 Jobs'] },
    { name: 'Upload Video CV', values: ['90s', '150s', '180s', '180s'] },
    { name: 'Application Insights', hasTooltip: true, values: [false, true, true, true] },
    { name: 'See Matching Percentage', values: [false, true, true, true] },
    { name: 'See who Viewed my Profile', values: [false, true, true, true] },
    { name: 'View who Shortlisted me', values: [false, true, true, true] },
    { name: 'Track Employer Activity on Jobs', hasTooltip: true, values: [false, true, true, true] },
    { name: 'See Job Details after Deadline', values: [false, true, true, true] },
    { name: 'Early Access Job', hasTooltip: true, values: [false, true, true, true] },
    { name: 'Career Counseling Access', hasTooltip: true, values: [false, true, true, true] }
  ];

  selectDuration(id: string) {
    this.selectedDuration = id;
  }
}
