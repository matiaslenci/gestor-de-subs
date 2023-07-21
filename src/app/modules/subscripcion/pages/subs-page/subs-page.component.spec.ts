import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsPageComponent } from './subs-page.component';

describe('SubsPageComponent', () => {
  let component: SubsPageComponent;
  let fixture: ComponentFixture<SubsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubsPageComponent]
    });
    fixture = TestBed.createComponent(SubsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
