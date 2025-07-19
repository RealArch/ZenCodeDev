import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainHeader } from './home-main-header';

describe('HomeMainHeader', () => {
  let component: HomeMainHeader;
  let fixture: ComponentFixture<HomeMainHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMainHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMainHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
