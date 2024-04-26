import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPreviewPageComponent } from './guest-preview-page.component';

describe('GuestPreviewPageComponent', () => {
  let component: GuestPreviewPageComponent;
  let fixture: ComponentFixture<GuestPreviewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestPreviewPageComponent]
    });
    fixture = TestBed.createComponent(GuestPreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
