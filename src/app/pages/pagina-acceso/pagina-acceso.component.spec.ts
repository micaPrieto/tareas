import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAccesoComponent } from './pagina-acceso.component';

describe('PaginaAccesoComponent', () => {
  let component: PaginaAccesoComponent;
  let fixture: ComponentFixture<PaginaAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAccesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
