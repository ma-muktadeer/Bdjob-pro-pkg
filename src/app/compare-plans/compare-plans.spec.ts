import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePlans } from './compare-plans';

describe('ComparePlans', () => {
  let component: ComparePlans;
  let fixture: ComponentFixture<ComparePlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparePlans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparePlans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
