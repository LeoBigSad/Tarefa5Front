import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoeditarComponent } from './enderecoeditar.component';

describe('EnderecoeditarComponent', () => {
  let component: EnderecoeditarComponent;
  let fixture: ComponentFixture<EnderecoeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecoeditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
