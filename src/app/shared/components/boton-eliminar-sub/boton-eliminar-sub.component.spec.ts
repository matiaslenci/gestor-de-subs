import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEliminarSubComponent } from './boton-eliminar-sub.component';

describe('BotonEliminarSubComponent', () => {
  let component: BotonEliminarSubComponent;
  let fixture: ComponentFixture<BotonEliminarSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BotonEliminarSubComponent]
    });
    fixture = TestBed.createComponent(BotonEliminarSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
