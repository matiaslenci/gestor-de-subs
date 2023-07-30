import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSubComponent } from './logo-sub.component';

describe('LogoSubComponent', () => {
  let component: LogoSubComponent;
  let fixture: ComponentFixture<LogoSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogoSubComponent]
    });
    fixture = TestBed.createComponent(LogoSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
