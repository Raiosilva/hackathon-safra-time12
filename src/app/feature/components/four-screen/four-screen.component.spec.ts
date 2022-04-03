import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourScreenComponent } from './four-screen.component';

describe('FourScreenComponent', () => {
  let component: FourScreenComponent;
  let fixture: ComponentFixture<FourScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
