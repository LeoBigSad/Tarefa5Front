import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecohomeComponent } from './enderecohome.component';

describe('EnderecohomeComponent', () => {
  let component: EnderecohomeComponent;
  let fixture: ComponentFixture<EnderecohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecohomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
