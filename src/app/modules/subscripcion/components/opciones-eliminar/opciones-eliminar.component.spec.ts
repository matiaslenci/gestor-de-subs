import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesEliminarComponent } from './opciones-eliminar.component';

describe('OpcionesEliminarComponent', () => {
  let component: OpcionesEliminarComponent;
  let fixture: ComponentFixture<OpcionesEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcionesEliminarComponent]
    });
    fixture = TestBed.createComponent(OpcionesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
