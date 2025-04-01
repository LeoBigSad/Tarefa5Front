import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiaformularioComponent } from './academiaformulario.component';

describe('AcademiaformularioComponent', () => {
  let component: AcademiaformularioComponent;
  let fixture: ComponentFixture<AcademiaformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademiaformularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademiaformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
