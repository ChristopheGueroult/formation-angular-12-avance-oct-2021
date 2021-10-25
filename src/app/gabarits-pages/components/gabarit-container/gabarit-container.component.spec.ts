import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabaritContainerComponent } from './gabarit-container.component';

describe('GabaritContainerComponent', () => {
  let component: GabaritContainerComponent;
  let fixture: ComponentFixture<GabaritContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GabaritContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GabaritContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
