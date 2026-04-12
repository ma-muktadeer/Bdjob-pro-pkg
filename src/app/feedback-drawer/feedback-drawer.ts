import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-feedback-drawer',
  imports: [],
  templateUrl: './feedback-drawer.html',
  styleUrl: './feedback-drawer.css',
})
export class FeedbackDrawer {
  isOpen = signal(false);
  selectedRating = signal<string | null>(null);

  ratings = [
    { label: 'Very Poor', emoji: '😠' },
    { label: 'Poor', emoji: '☹️' },
    { label: 'Neutral', emoji: '😐' },
    { label: 'Good', emoji: '😊' },
    { label: 'Excellent', emoji: '🤩' }
  ];

  toggleDrawer() {
    this.isOpen.set(!this.isOpen());
  }

  setRating(label: string) {
    this.selectedRating.set(label);
  }
}
