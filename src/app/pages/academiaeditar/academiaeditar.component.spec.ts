import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiaeditarComponent } from './academiaeditar.component';

describe('AcademiaeditarComponent', () => {
  let component: AcademiaeditarComponent;
  let fixture: ComponentFixture<AcademiaeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademiaeditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademiaeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
