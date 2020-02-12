import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesActivitiesComponent } from './favorites-activities.component';

describe('FavoritesActivitiesComponent', () => {
  let component: FavoritesActivitiesComponent;
  let fixture: ComponentFixture<FavoritesActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
