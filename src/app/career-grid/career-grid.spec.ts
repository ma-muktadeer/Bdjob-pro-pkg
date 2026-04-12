import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerGrid } from './career-grid';

describe('CareerGrid', () => {
  let component: CareerGrid;
  let fixture: ComponentFixture<CareerGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
