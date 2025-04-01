import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiacadastroComponent } from './academiacadastro.component';

describe('AcademiacadastroComponent', () => {
  let component: AcademiacadastroComponent;
  let fixture: ComponentFixture<AcademiacadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademiacadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademiacadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
