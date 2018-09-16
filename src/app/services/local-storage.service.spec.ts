import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call localStorage.getItem', () => {
    const returnValue = 'return value';

    const spy = spyOn(localStorage.__proto__, 'getItem');
    spy.and.returnValue(returnValue);

    expect(service.get('test')).toBe(returnValue);
    expect(spy.calls.count()).toBe(1);
    expect(spy.calls.mostRecent().args[0]).toBe('test');
  });

  it('should call localStorage.putItem', () => {
    const spy = spyOn(localStorage.__proto__, 'setItem');

    service.set('test', 'value');
    expect(spy.calls.count()).toBe(1);
    expect(spy.calls.mostRecent().args[0]).toBe('test');
    expect(spy.calls.mostRecent().args[1]).toBe('value');
  });
});
