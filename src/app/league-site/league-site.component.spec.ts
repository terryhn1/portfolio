import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueSiteComponent } from './league-site.component';

describe('LeagueSiteComponent', () => {
  let component: LeagueSiteComponent;
  let fixture: ComponentFixture<LeagueSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
