import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { GithubConnectorService, Order } from './github-connector.service';
import { searchResults } from '../../testing/model-stubs/project-stub';

describe('GithubConnectorService', () => {
  let httpTestingController: HttpTestingController;
  let service: GithubConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        GithubConnectorService
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(GithubConnectorService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#searchRepositories', () => {
    it('should search repositories by string', () => {
      service.searchRepositories('search string').subscribe(
        results => expect(results.items.length).toBe(2),
        fail
      );

      const req = httpTestingController.expectOne(
        'https://api.github.com/search/repositories?q=search%20string&order=desc&page=0');
      expect(req.request.method).toEqual('GET');
      req.flush(searchResults);
    });
    it('should change order', () => {
      service.searchRepositories('search string', Order.ascending).subscribe(
        _ => null,
        fail
      );

      const req = httpTestingController.expectOne(
        'https://api.github.com/search/repositories?q=search%20string&order=asc&page=0');
      expect(req.request.method).toEqual('GET');
      req.flush(searchResults);
    });
    it('should request any page', () => {
      service.searchRepositories('search string', Order.ascending, 3).subscribe(
        _ => null,
        fail
      );

      const req = httpTestingController.expectOne(
        (req) =>  req.url == 'https://api.github.com/search/repositories' && req.params.get('page') == '3'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(searchResults);
    });
  });
});
