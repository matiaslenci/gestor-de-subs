import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShareSubPageComponent } from './new-share-sub-page.component';

describe('NewShareSubPageComponent', () => {
  let component: NewShareSubPageComponent;
  let fixture: ComponentFixture<NewShareSubPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewShareSubPageComponent]
    });
    fixture = TestBed.createComponent(NewShareSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
