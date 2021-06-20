import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjBannerComponent } from './proj-banner.component';

describe('ProjBannerComponent', () => {
  let component: ProjBannerComponent;
  let fixture: ComponentFixture<ProjBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
