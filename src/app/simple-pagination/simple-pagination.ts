import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-simple-pagination',
  imports: [],
  templateUrl: './simple-pagination.html',
  styleUrl: './simple-pagination.css',
})
export class SimplePagination {
  totalPages = input.required<number>();
  activeIndex = input.required<number>();
  isHandset = input<boolean>(false);
  pageChange = output<number>();

  protected readonly totalPagesArray = computed(() => Array.from({ length: this.totalPages() }, (_, i) => i));
}
