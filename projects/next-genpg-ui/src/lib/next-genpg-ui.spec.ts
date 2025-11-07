import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGenpgUi } from './next-genpg-ui';

describe('NextGenpgUi', () => {
  let component: NextGenpgUi;
  let fixture: ComponentFixture<NextGenpgUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextGenpgUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextGenpgUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
