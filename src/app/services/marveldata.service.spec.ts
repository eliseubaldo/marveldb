import { TestBed, inject } from '@angular/core/testing';

import { MarveldataService } from './marveldata.service';

describe('MarveldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarveldataService]
    });
  });

  it('should be created', inject([MarveldataService], (service: MarveldataService) => {
    expect(service).toBeTruthy();
  }));
});
