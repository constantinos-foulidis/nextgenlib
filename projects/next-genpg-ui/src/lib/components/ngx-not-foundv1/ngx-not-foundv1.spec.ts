import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNotFoundv1 } from './ngx-not-foundv1';

describe('NgxNotFoundv1', () => {
  let component: NgxNotFoundv1;
  let fixture: ComponentFixture<NgxNotFoundv1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNotFoundv1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxNotFoundv1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
