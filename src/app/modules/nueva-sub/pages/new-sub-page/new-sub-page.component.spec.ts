import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubPageComponent } from './new-sub-page.component';

describe('NewSubPageComponent', () => {
  let component: NewSubPageComponent;
  let fixture: ComponentFixture<NewSubPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSubPageComponent]
    });
    fixture = TestBed.createComponent(NewSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
