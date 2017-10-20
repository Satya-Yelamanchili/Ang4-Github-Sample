import { TestBed, inject } from '@angular/core/testing';

import { ProfilesearchService } from './profilesearch.service';

describe('ProfilesearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilesearchService]
    });
  });

  it('should be created', inject([ProfilesearchService], (service: ProfilesearchService) => {
    expect(service).toBeTruthy();
  }));
});
