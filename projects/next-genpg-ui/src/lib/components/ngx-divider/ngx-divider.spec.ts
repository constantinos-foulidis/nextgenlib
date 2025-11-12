import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDivider } from './ngx-divider';

describe('NgxDivider', () => {
  let component: NgxDivider;
  let fixture: ComponentFixture<NgxDivider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDivider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDivider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
