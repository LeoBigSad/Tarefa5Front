import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaeditarComponent } from './pessoaeditar.component';

describe('PessoaeditarComponent', () => {
  let component: PessoaeditarComponent;
  let fixture: ComponentFixture<PessoaeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaeditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoaeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
