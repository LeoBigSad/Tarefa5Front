import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AparelhoeditarComponent } from './aparelhoeditar.component';

describe('AparelhoeditarComponent', () => {
  let component: AparelhoeditarComponent;
  let fixture: ComponentFixture<AparelhoeditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AparelhoeditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AparelhoeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
