import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCard } from './ngx-card';

describe('NgxCard', () => {
  let component: NgxCard;
  let fixture: ComponentFixture<NgxCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
