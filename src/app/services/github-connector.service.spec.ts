import { TestBed } from '@angular/core/testing';

import { GithubConnectorService } from './github-connector.service';

describe('GithubConnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubConnectorService = TestBed.get(GithubConnectorService);
    expect(service).toBeTruthy();
  });
});
