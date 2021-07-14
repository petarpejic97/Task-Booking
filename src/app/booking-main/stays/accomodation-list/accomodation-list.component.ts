import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { StaysService } from '../stays.service';

@Component({
  selector: 'app-accomodation-list',
  templateUrl: './accomodation-list.component.html',
  styleUrls: ['./accomodation-list.component.css']
})
export class AccomodationListComponent implements OnInit {
  filteredAccomodation: Accomodation[];
  subscribtion: Subscription;
  tripDetail: TripDetail;
  headerContent = '';
  constructor(private stayServce: StaysService,
              private router: Router,
              private route: ActivatedRoute) {}
  panelOpenState = false;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.tripDetail = new TripDetail(
        params.destination,
        params.startDate,
        params.endDate,
        params.room,
        params.adults,
        params.children);
      });
    this.setUpUI();
  }
  setUpUI(): void{
    this.setFilteredAccomodation();
    this.setHeaderContent();
  }
  setFilteredAccomodation(): void{
    this.filteredAccomodation = this.stayServce.getAllAccomodations().filter(
      accomodation => accomodation.roomsNum >= this.tripDetail.roomNumber &&
                      accomodation.adultsNum >= this.tripDetail.adultsNumber &&
                      accomodation.childrenNum >= this.tripDetail.childrenNumber &&
                      accomodation.city === this.tripDetail.destination
    );
  }
  setHeaderContent(): void{
    const [startDayName, startMonth, startDayNumber] = this.tripDetail.startDate.toString().split(' ');
    const [endDayName, endMonth, endDayNumber] = this.tripDetail.endDate.toString().split(' ');

    this.headerContent = `${this.tripDetail.destination} · ${startMonth} ${startDayNumber} - ${endMonth} ${endDayNumber}`
   
  }
  back(): void{
    this.router.navigate(['../accomodation-search'], {
      relativeTo: this.route,
      queryParams:
        {
          destination: this.tripDetail.destination,
          room: this.tripDetail.roomNumber,
          adults: this.tripDetail.adultsNumber,
          children: this.tripDetail.childrenNumber,
          startDate: this.tripDetail.startDate,
          endDate: this.tripDetail.endDate
        }
      }
    );
  }
}
