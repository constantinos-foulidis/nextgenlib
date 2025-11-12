import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rows } from './rows';

describe('Rows', () => {
  let component: Rows;
  let fixture: ComponentFixture<Rows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
