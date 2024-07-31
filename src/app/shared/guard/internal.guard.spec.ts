import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { internalGuard } from './internal.guard';

describe('internalGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => internalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
