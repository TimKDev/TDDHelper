import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactorCycleComponent } from './refactor-cycle.component';

describe('RefactorCycleComponent', () => {
  let component: RefactorCycleComponent;
  let fixture: ComponentFixture<RefactorCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefactorCycleComponent]
    });
    fixture = TestBed.createComponent(RefactorCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
