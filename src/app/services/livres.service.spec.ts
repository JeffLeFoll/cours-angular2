/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LivresService } from './livres.service';

describe('Service: Livres', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivresService]
    });
  });

  it('should ...', inject([LivresService], (service: LivresService) => {
    expect(service).toBeTruthy();
  }));
});
