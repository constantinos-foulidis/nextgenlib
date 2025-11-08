import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxToolbar } from './ngx-toolbar';

describe('NgxToolbar', () => {
  let component: NgxToolbar;
  let fixture: ComponentFixture<NgxToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
