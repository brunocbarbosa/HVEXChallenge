import { TestBed } from '@angular/core/testing';

import { FavoritesActivitiesService } from './favorites-activities.service';

describe('FavoritesActivitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritesActivitiesService = TestBed.get(FavoritesActivitiesService);
    expect(service).toBeTruthy();
  });
});
