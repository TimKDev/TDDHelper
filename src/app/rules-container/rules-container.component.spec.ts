import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesContainerComponent } from './rules-container.component';

describe('RulesContainerComponent', () => {
  let component: RulesContainerComponent;
  let fixture: ComponentFixture<RulesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulesContainerComponent]
    });
    fixture = TestBed.createComponent(RulesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
