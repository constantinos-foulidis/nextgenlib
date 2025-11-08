import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMenubar } from './ngx-menubar';

describe('NgxMenubar', () => {
  let component: NgxMenubar;
  let fixture: ComponentFixture<NgxMenubar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMenubar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMenubar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
