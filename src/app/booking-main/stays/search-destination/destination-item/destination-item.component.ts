import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destination } from 'src/app/shared/destination.model';
import { TripDetailService } from '../../accomodation-search/trip-detail/trip-detail.service';

@Component({
  selector: 'app-destination-item',
  templateUrl: './destination-item.component.html',
  styleUrls: ['./destination-item.component.css']
})
export class DestinationItemComponent implements OnInit {
  @Input() destination: Destination;
  constructor(private tripDetailService: TripDetailService,
              private router: Router) { }

  ngOnInit(): void {
  }
  sendCityInStays(city: string): void{
    this.tripDetailService.updateDestination(city);
    this.router.navigate(['/booking-main']);
  }
}
