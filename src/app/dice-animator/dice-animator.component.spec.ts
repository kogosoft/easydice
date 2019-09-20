import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceAnimatorComponent } from './dice-animator.component';

describe('dice-animator', () => {
  let component: DiceAnimatorComponent;
  let fixture: ComponentFixture<DiceAnimatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceAnimatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceAnimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
