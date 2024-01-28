import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AirportsListService } from './airports-list.service';

describe('AirportsListService', () => {
  let service: AirportsListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AirportsListService],
    });

    service = TestBed.inject(AirportsListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all airports', () => {
    const mockAirports = [
      { key: 'A1', name: 'Airport 1' },
      { key: 'A2', name: 'Airport 2' },
    ];

    service.getAllAirports().then((airports: any) => {
      expect(airports).toEqual(mockAirports);
    });

    const req = httpTestingController.expectOne('http://localhost:1500/allAirports');
    expect(req.request.method).toEqual('GET');

    req.flush(mockAirports);
  });
});
