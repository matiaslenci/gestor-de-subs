import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarSubPageComponent } from './gestionar-sub-page.component';

describe('GestionarSubPageComponent', () => {
  let component: GestionarSubPageComponent;
  let fixture: ComponentFixture<GestionarSubPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarSubPageComponent]
    });
    fixture = TestBed.createComponent(GestionarSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
