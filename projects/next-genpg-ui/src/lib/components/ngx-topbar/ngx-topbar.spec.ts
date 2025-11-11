import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTopbar } from './ngx-topbar';

describe('NgxTopbar', () => {
  let component: NgxTopbar;
  let fixture: ComponentFixture<NgxTopbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTopbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTopbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
