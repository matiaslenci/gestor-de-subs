import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAgregarComponent } from './boton-agregar.component';

describe('BotonAgregarComponent', () => {
  let component: BotonAgregarComponent;
  let fixture: ComponentFixture<BotonAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BotonAgregarComponent]
    });
    fixture = TestBed.createComponent(BotonAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
