import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGeneralSolutions } from './section-general-solutions';

describe('SectionGeneralSolutions', () => {
  let component: SectionGeneralSolutions;
  let fixture: ComponentFixture<SectionGeneralSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionGeneralSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionGeneralSolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
