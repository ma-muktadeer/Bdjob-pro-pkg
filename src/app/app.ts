import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PricingPlanInterface } from './interfaces/card.interfaces';
import { ComparePlans } from "./compare-plans/compare-plans";
import { CareerGrid } from "./career-grid/career-grid";
import { FaqAsk } from "./faq-ask/faq-ask";
import { FeedbackDrawer } from "./feedback-drawer/feedback-drawer";
import { FeedbackForm } from "./feedback-form/feedback-form";
import { PricingPlanList } from "./pricing-plan-list/pricing-plan-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeedbackForm, ComparePlans, CareerGrid, FaqAsk, FeedbackDrawer, PricingPlanList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bdjob-pro-pkg');
  plans: PricingPlanInterface[] = [
    {
      title: 'Free', price: '0', buttonText: 'Upgrade Now',
      features: [
        { label: 'Monthly Application Limit', value: 75 },
        { label: 'Application Boosting', value: false },
        { label: 'Application Insights', value: false, isNew: true },
        // ... rest of features
      ]
    },
    {
      title: 'Basic', price: '149', originalPrice: '180', savings: '33%', buttonText: 'Upgrade Now',
      features: [
        { label: 'Monthly Application Limit', value: 150 },
        { label: 'Application Boosting', value: 5 },
        { label: 'Application Insights', value: true, isNew: true },
        // ... rest of features
      ]
    },
    {
      title: 'Standard', price: '149', originalPrice: '180', savings: '33%', badge: 'Recommended', buttonText: 'Upgrade Now',
      features: [
        { label: 'Monthly Application Limit', value: 150 },
        { label: 'Application Boosting', value: 5 },
        { label: 'Application Insights', value: true, isNew: true },
        // ... rest of features
      ]
    },
    {
      title: 'Premium', price: '299', originalPrice: '360', savings: '17%', buttonText: 'Upgrade Now',
      features: [
        { label: 'Monthly Application Limit', value: 150 },
        { label: 'Application Boosting', value: 5 },
        { label: 'Application Insights', value: true, isNew: true },
        // ... rest of features
      ]
    },
  ];

  // Define the state as a signal
  isDrawerOpen = signal(false);

  toggleDrawer() {
    // Toggle the signal value
    this.isDrawerOpen.update(value => !value);
  }
}
