import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShareSubPageComponent } from './list-share-sub-page.component';

describe('ListShareSubPageComponent', () => {
  let component: ListShareSubPageComponent;
  let fixture: ComponentFixture<ListShareSubPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListShareSubPageComponent]
    });
    fixture = TestBed.createComponent(ListShareSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
