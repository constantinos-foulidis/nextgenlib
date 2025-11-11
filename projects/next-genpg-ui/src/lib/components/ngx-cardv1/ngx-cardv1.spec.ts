import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCardv1 } from './ngx-cardv1';

describe('NgxCardv1', () => {
  let component: NgxCardv1;
  let fixture: ComponentFixture<NgxCardv1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCardv1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCardv1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
