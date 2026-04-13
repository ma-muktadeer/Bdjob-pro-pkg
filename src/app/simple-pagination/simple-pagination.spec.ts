import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePagination } from './simple-pagination';

describe('SimplePagination', () => {
  let component: SimplePagination;
  let fixture: ComponentFixture<SimplePagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplePagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplePagination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
