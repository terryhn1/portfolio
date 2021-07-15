import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueChampionComponent } from './league-champion.component';

describe('LeagueChampionComponent', () => {
  let component: LeagueChampionComponent;
  let fixture: ComponentFixture<LeagueChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueChampionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
