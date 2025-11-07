import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxButton } from './ngx-button';

describe('NgxButton', () => {
  let component: NgxButton;
  let fixture: ComponentFixture<NgxButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
