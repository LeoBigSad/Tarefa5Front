import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoformularioComponent } from './enderecoformulario.component';

describe('EnderecoformularioComponent', () => {
  let component: EnderecoformularioComponent;
  let fixture: ComponentFixture<EnderecoformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecoformularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
