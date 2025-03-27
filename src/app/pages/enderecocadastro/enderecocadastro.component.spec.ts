import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecocadastroComponent } from './enderecocadastro.component';

describe('EnderecocadastroComponent', () => {
  let component: EnderecocadastroComponent;
  let fixture: ComponentFixture<EnderecocadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecocadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
