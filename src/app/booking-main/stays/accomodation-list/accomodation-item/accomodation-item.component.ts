import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { TripDetailService } from '../../accomodation-search/trip-detail/trip-detail.service';

@Component({
  selector: 'app-accomodation-item',
  templateUrl: './accomodation-item.component.html',
  styleUrls: ['./accomodation-item.component.css']
})
export class AccomodationItemComponent implements OnInit {
  @Input() accomodation: Accomodation;
  tripDetail: TripDetail;
  numberOfNights: number;
  priceSum: number;
  startDays: number;
  endDays: number;
  photo: string;
  constructor(private tripDetailService: TripDetailService,
              private router: Router,
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.tripDetail = new TripDetail(
          params.destination,
          params.startDate,
          params.endDate,
          params.room,
          params.adults,
          params.children);
        }
      );
    this.tripDetailService.countNumberOfNights(new Date(this.tripDetail.startDate), new Date(this.tripDetail.endDate));
    this.numberOfNights = this.tripDetailService.getNumberOfNights();
    this.priceSum = this.numberOfNights * this.accomodation.pricePerDay;
  }
  onItemClick(): void{
    this.router.navigate(['../accomodation'], {
      relativeTo: this.route,
      queryParams:
        {
          accId: this.accomodation.id,
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

