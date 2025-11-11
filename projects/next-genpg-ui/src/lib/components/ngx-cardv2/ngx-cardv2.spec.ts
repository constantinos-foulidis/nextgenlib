import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCardv2 } from './ngx-cardv2';

describe('NgxCardv2', () => {
  let component: NgxCardv2;
  let fixture: ComponentFixture<NgxCardv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCardv2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCardv2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
