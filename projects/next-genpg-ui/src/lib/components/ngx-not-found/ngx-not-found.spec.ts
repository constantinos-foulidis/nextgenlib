import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNotFound } from './ngx-not-found';

describe('NgxNotFound', () => {
  let component: NgxNotFound;
  let fixture: ComponentFixture<NgxNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNotFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxNotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
