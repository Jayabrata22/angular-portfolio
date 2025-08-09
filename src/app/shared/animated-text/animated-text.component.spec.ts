import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTextComponent } from './animated-text.component';

describe('AnimatedTextComponent', () => {
  let component: AnimatedTextComponent;
  let fixture: ComponentFixture<AnimatedTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedTextComponent]
    });
    fixture = TestBed.createComponent(AnimatedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
