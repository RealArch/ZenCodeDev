import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSliderProjects } from './section-slider-projects';

describe('SectionSliderProjects', () => {
  let component: SectionSliderProjects;
  let fixture: ComponentFixture<SectionSliderProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSliderProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSliderProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
