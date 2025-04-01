import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparelhoformularioComponent } from './aparelhoformulario.component';

describe('AparelhoformularioComponent', () => {
  let component: AparelhoformularioComponent;
  let fixture: ComponentFixture<AparelhoformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AparelhoformularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparelhoformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
