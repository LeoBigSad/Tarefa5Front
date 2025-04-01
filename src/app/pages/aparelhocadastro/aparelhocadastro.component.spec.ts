import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparelhocadastroComponent } from './aparelhocadastro.component';

describe('AparelhocadastroComponent', () => {
  let component: AparelhocadastroComponent;
  let fixture: ComponentFixture<AparelhocadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AparelhocadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparelhocadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
