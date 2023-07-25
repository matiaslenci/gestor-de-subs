import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewSubComponent } from './card-new-sub.component';

describe('CardNewSubComponent', () => {
  let component: CardNewSubComponent;
  let fixture: ComponentFixture<CardNewSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNewSubComponent]
    });
    fixture = TestBed.createComponent(CardNewSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
