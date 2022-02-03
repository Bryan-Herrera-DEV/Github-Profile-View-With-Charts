import { TestBed } from '@angular/core/testing';

import { GuardGuard } from './guard.guard';

describe('GuardGuard', () => {
  let guard: GuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
