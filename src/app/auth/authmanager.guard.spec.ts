import { TestBed, async, inject } from '@angular/core/testing';

import { AuthmanagerGuard } from './authmanager.guard';

describe('AuthmanagerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthmanagerGuard]
    });
  });

  it('should ...', inject([AuthmanagerGuard], (guard: AuthmanagerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
