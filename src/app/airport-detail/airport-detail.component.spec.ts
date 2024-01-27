import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router'; // Import ActivatedRoute and ParamMap
import { of } from 'rxjs'; // Import of operator
import { AirportDetailComponent } from './airport-detail.component';
import { AirportsListService } from '../airports-list/airports-list.service';

describe('AirportDetailComponent', () => {
  let component: AirportDetailComponent;
  let fixture: ComponentFixture<AirportDetailComponent>;

  // Create a mock ActivatedRoute with a paramMap
  const mockActivatedRoute = {
    paramMap: of(convertToParamMap({ key: 'test-key' }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirportDetailComponent],
      imports: [HttpClientTestingModule],
      providers: [
        AirportsListService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute } // Provide the mock ActivatedRoute
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
