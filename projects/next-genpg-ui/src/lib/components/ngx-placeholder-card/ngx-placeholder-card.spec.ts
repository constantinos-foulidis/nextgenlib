import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPlaceholderCard } from './ngx-placeholder-card';

describe('NgxPlaceholderCard', () => {
  let component: NgxPlaceholderCard;
  let fixture: ComponentFixture<NgxPlaceholderCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPlaceholderCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPlaceholderCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
