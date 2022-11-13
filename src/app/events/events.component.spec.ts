import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVENTSComponent } from './events.component';

describe('EVENTSComponent', () => {
  let component: EVENTSComponent;
  let fixture: ComponentFixture<EVENTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVENTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EVENTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
