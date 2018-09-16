import { TestBed } from '@angular/core/testing';

import { CatScoreService } from './cat-score.service';
import { LocalStorageService } from './local-storage.service';
import { project } from '../../testing/model-stubs/project-stub';

class LocalStorageMockService {
  private values: {key: string, value: string}[] = [];

  get(key: string): string {
    return this.values[key] || null;
  }

  set(key: string, value: string) {
    this.values[key] = value;
  }
}

describe('CatScoreService', () => {
  let service: CatScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatScoreService,
        {provide: LocalStorageService, useClass: LocalStorageMockService}
      ]
    });
    service = TestBed.get(CatScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return zero for unknown project', () => {
    expect(service.get(project)).toBe(0);
  });

  it('should return 1 for on increment', () => {
    expect(service.increase(project)).toBe(1);
    expect(service.get(project)).toBe(1);
  });

  it('should return 2 for twice increment', () => {
    expect(service.increase(project)).toBe(1);
    expect(service.increase(project)).toBe(2);
    expect(service.get(project)).toBe(2);
  });

  it('should return 0 for decrement after increment', () => {
    expect(service.increase(project)).toBe(1);
    expect(service.decrease(project)).toBe(0);
    expect(service.get(project)).toBe(0);
  });

  it(`shouldn't go to negative side`, () => {
    expect(service.decrease(project)).toBe(0);
    expect(service.get(project)).toBe(0);
  });
});
