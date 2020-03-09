import { TestBed } from '@angular/core/testing';

import { FinalPageService } from './final-page.service';

describe('FinalPageService', () => {
  let service: FinalPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
