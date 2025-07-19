import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpecialty } from './section-specialty';

describe('SectionSpecialty', () => {
  let component: SectionSpecialty;
  let fixture: ComponentFixture<SectionSpecialty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSpecialty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSpecialty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
