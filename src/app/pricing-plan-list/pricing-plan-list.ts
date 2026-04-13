import { Component, computed, ElementRef, inject, input, signal, ViewChild, AfterViewInit } from '@angular/core';
import { PricingPlan } from "../pricing-plan/pricing-plan";
import { PricingPlanInterface } from '../interfaces/card.interfaces';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SimplePagination } from "../simple-pagination/simple-pagination";

@Component({
  selector: 'app-pricing-plan-list',
  standalone: true,
  imports: [PricingPlan, SimplePagination],
  templateUrl: './pricing-plan-list.html',
  styleUrl: './pricing-plan-list.css',
})
export class PricingPlanList implements AfterViewInit {
  private breakpointObserver = inject(BreakpointObserver);
  plans = input.required<PricingPlanInterface[]>();

  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  extendedPlans = computed(() => {
    const original = this.plans();
    if (original.length === 0) return [];
    return [original[original.length - 1], ...original, original[0]];
  });

  isHandset = toSignal(
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches)),
    { initialValue: false }
  );
  activeIndex = signal(0);
  private isJumping = false;

  ngAfterViewInit() {
    if (this.isHandset()) {
      this.scrollToIndex(0, 'instant');
    }
  }

  onScroll(event: Event) {
    if (this.isJumping) return;

    const el = event.target as HTMLElement;
    const card = el.querySelector('div');
    if (!card) return;

    const itemWidth = card.clientWidth + 16;
    const scrollLeft = el.scrollLeft;

    const virtualIndex = Math.round(scrollLeft / itemWidth);

    let logicalIndex = virtualIndex - 1;
    if (logicalIndex < 0) logicalIndex = this.plans().length - 1;
    if (logicalIndex >= this.plans().length) logicalIndex = 0;

    if (this.activeIndex() !== logicalIndex) {
      this.activeIndex.set(logicalIndex);
    }

    const maxVirtualIndex = this.extendedPlans().length - 1;
    const threshold = 5;

    if (scrollLeft <= threshold) {
      this.jumpTo(this.plans().length * itemWidth, el);
    } else if (scrollLeft >= (maxVirtualIndex * itemWidth) - threshold) {
      this.jumpTo(itemWidth, el);
    }
  }

  private jumpTo(scrollLeft: number, el: HTMLElement) {
    this.isJumping = true;
    const originalSnap = el.style.scrollSnapType;
    el.style.scrollSnapType = 'none';
    el.scrollTo({ left: scrollLeft, behavior: 'auto' });

    setTimeout(() => {
      el.style.scrollSnapType = originalSnap || 'x mandatory';
      this.isJumping = false;
    }, 50);
  }

  scrollToIndex(index: number, behavior: ScrollBehavior = 'smooth') {
    if (this.carousel) {
      const el = this.carousel.nativeElement;
      const card = el.querySelector('div');
      if (!card) return;
      const itemWidth = card.clientWidth + 16;
      const scrollAmount = itemWidth * (index + 1);
      el.scrollTo({
        left: scrollAmount,
        behavior: behavior
      });
      this.activeIndex.set(index);
    }
  }

  onPageChange(index: number) {
    this.scrollToIndex(index);
  }
}
