import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiahomeComponent } from './academiahome.component';

describe('AcademiahomeComponent', () => {
  let component: AcademiahomeComponent;
  let fixture: ComponentFixture<AcademiahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademiahomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademiahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
