import { TestBed } from '@angular/core/testing';

import { CatScoreService } from './cat-score.service';

describe('CatScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatScoreService = TestBed.get(CatScoreService);
    expect(service).toBeTruthy();
  });
});
