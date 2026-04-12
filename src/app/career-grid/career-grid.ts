import { Component } from '@angular/core';

@Component({
  selector: 'app-career-grid',
  imports: [],
  templateUrl: './career-grid.html',
  styleUrl: './career-grid.css',
})
export class CareerGrid {
  // features.component.ts
  features = [
    { title: 'Monthly Application Limit', size: 'small', desc: 'With Premium, apply...' },
    { title: 'Application Boosting', size: 'small', desc: 'With Premium, apply...' },
    { title: 'Direct Message to Employer', size: 'small', desc: 'With Premium, apply...' },
    { title: 'Application Insights', size: 'wide', desc: 'With Premium, apply for unlimited jobs and explore diverse paths...' }, // Boro width
    { title: 'Upload Video CV', size: 'small', desc: 'With Premium, apply...' },
    { title: 'See Matching Percentage', size: 'small', desc: 'With Premium, apply...' },
    { title: 'See who Viewed my Profile', size: 'small', desc: 'With Premium, apply...' },
    { title: 'View who Shortlisted me', size: 'small', desc: 'With Premium, apply...' },
    { title: 'Track Hiring Activities on Jobs', size: 'tall', desc: 'With Premium, apply...' }, // Boro height
    { title: 'See Job Details after Deadline', size: 'tall', desc: 'With Premium, apply...' }, // Boro height
  ];
}

export interface FeatureCard {
  title: string;
  description: string;
  imageSrc?: string;
  isLarge?: boolean;
}