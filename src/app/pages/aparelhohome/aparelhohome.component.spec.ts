import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparelhohomeComponent } from './aparelhohome.component';

describe('AparelhohomeComponent', () => {
  let component: AparelhohomeComponent;
  let fixture: ComponentFixture<AparelhohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AparelhohomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparelhohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
