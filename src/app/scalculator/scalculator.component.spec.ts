import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCalculatorComponent } from './scalculator.component';

describe('SCalculatorComponent', () => {
  let component: SCalculatorComponent;
  let fixture: ComponentFixture<SCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
