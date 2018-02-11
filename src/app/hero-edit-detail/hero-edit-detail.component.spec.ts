import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEditDetailComponent } from './hero-edit-detail.component';

describe('HeroEditDetailComponent', () => {
  let component: HeroEditDetailComponent;
  let fixture: ComponentFixture<HeroEditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroEditDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
