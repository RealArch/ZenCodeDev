import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWelcome } from './section-welcome';

describe('SectionWelcome', () => {
  let component: SectionWelcome;
  let fixture: ComponentFixture<SectionWelcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionWelcome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionWelcome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
