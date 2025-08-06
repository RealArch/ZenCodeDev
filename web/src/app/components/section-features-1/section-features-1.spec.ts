import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeatures1 } from './section-features-1';

describe('SectionFeatures1', () => {
  let component: SectionFeatures1;
  let fixture: ComponentFixture<SectionFeatures1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFeatures1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFeatures1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
