import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaformularioComponent } from './pessoaformulario.component';

describe('PessoaformularioComponent', () => {
  let component: PessoaformularioComponent;
  let fixture: ComponentFixture<PessoaformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaformularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
