import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq-ask',
  imports: [],
  templateUrl: './faq-ask.html',
  styleUrl: './faq-ask.css',
})
export class FaqAsk {
  activeIndex = signal<number | null>(null);

  faqs = [
    { question: 'What is Bdjobs Pro?', answer: 'Bdjobs Pro is a premium subscription service designed to accelerate your career growth with advanced tools.' },
    { question: 'Why subscribe to Bdjobs Pro?', answer: 'Subscription gives you access to exclusive features like Application Boosting and Direct Messaging.' },
    { question: 'How to subscribe to Bdjobs Pro?', answer: 'Simply select a plan from the pricing table above and complete the payment process.' },
    { question: 'What payment methods are accepted for Bdjobs Pro?', answer: 'We accept BKash, Nagad, Rocket, and all major Credit/Debit cards.' },
    { question: 'Can I cancel my Bdjobs Pro subscription anytime?', answer: 'Yes, you can cancel your subscription at any time from your account settings.' },
    { question: 'How to repurchase or renew Bdjobs Pro package?', answer: 'Go to your dashboard and click on the "Renew" button next to your current plan.' },
    { question: 'Where can I check my package limitations and usage?', answer: 'Package details are available in the "My Subscription" tab of your profile.' },
    { question: 'How does Matching Percentage improve job matching?', answer: 'It uses AI to compare your skill set with job requirements to show your fit level.' },
    { question: 'What is direct messaging and how does it work?', answer: 'It allows you to send a personalized message directly to the employer with your application.' }
  ];

  toggleAccordion(index: number) {
    this.activeIndex.update((value) => value === index ? null : index);
  }
}
