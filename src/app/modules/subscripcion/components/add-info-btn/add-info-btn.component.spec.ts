import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfoBtnComponent } from './add-info-btn.component';

describe('AddInfoBtnComponent', () => {
  let component: AddInfoBtnComponent;
  let fixture: ComponentFixture<AddInfoBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInfoBtnComponent]
    });
    fixture = TestBed.createComponent(AddInfoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
