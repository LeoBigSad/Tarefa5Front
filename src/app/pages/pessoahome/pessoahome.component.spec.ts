import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoahomeComponent } from './pessoahome.component';

describe('PessoahomeComponent', () => {
  let component: PessoahomeComponent;
  let fixture: ComponentFixture<PessoahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoahomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
