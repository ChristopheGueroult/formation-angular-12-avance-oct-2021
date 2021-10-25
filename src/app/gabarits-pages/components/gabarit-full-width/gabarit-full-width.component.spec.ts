import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabaritFullWidthComponent } from './gabarit-full-width.component';

describe('GabaritFullWidthComponent', () => {
  let component: GabaritFullWidthComponent;
  let fixture: ComponentFixture<GabaritFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GabaritFullWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GabaritFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
