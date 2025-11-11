import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxContentImg } from './ngx-content-img';

describe('NgxContentImg', () => {
  let component: NgxContentImg;
  let fixture: ComponentFixture<NgxContentImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxContentImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxContentImg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
