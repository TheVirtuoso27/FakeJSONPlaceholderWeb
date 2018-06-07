import { TestBed, async, inject } from '@angular/core/testing';

import { WardGuard } from './ward.guard';

describe('WardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WardGuard]
    });
  });

  it('should ...', inject([WardGuard], (guard: WardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
