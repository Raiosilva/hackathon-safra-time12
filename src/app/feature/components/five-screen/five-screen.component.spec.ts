import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveScreenComponent } from './five-screen.component';

describe('FiveScreenComponent', () => {
  let component: FiveScreenComponent;
  let fixture: ComponentFixture<FiveScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
