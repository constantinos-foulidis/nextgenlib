import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cols } from './cols';

describe('Cols', () => {
  let component: Cols;
  let fixture: ComponentFixture<Cols>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cols]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cols);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
