import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWidget } from './contact-widget';

describe('ContactWidget', () => {
  let component: ContactWidget;
  let fixture: ComponentFixture<ContactWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
