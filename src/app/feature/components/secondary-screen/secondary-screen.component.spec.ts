import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryScreenComponent } from './secondary-screen.component';

describe('SecondaryScreenComponent', () => {
  let component: SecondaryScreenComponent;
  let fixture: ComponentFixture<SecondaryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
