import { TestBed } from '@angular/core/testing';

import { RaffleActivityService } from './raffle-activity.service';

describe('RaffleActivityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaffleActivityService = TestBed.get(RaffleActivityService);
    expect(service).toBeTruthy();
  });
});
