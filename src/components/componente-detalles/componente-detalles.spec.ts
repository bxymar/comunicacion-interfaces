import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDetalles } from './componente-detalles';

describe('ComponenteDetalles', () => {
  let component: ComponenteDetalles;
  let fixture: ComponentFixture<ComponenteDetalles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteDetalles],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteDetalles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
