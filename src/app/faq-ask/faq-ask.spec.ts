import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAsk } from './faq-ask';

describe('FaqAsk', () => {
  let component: FaqAsk;
  let fixture: ComponentFixture<FaqAsk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqAsk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqAsk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
