import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookingMainService } from 'src/app/booking-main/booking-main.service';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { Stay } from 'src/app/shared/stay.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { User } from 'src/app/shared/user.model';
import { TripDetailService } from '../../accomodation-search/trip-detail/trip-detail.service';
import { StaysService } from '../../stays.service';

@Component({
  selector: 'app-finish-booking',
  templateUrl: './finish-booking.component.html',
  styleUrls: ['./finish-booking.component.css']
})
export class FinishBookingComponent implements OnInit {
  accomodation: Accomodation;
  stayId: number;
  sumPrice: number;
  tripDetail: TripDetail;
  stay: Stay;
  fullStartDate: {
    day: string,
    dayName: string,
    month: string,
    year: string
  } = {
    day: '',
    dayName: '',
    month: '',
    year: '',
  };
  fullEndDate: {
    day: string,
    dayName: string,
    month: string,
    year: string
  } = {
    day: '',
    dayName: '',
    month: '',
    year: '',
  };
  user: User;
  numberOfNights: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private stayService: StaysService,
              private bookingMainService: BookingMainService,
              private tripDetailService: TripDetailService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.accomodation = this.stayService.getAccomodationByid(+params.accId);
      this.stayId = +params.stayId;
      this.tripDetail = new TripDetail(
        params.destination,
        params.startDate,
        params.endDate,
        params.room,
        params.adults,
        params.children);
      this.setUpUI();
      this.setUpDates(this.tripDetail.startDate, this.tripDetail.endDate);
      });
  }
  setUpUI(): void{
    this.stay = this.accomodation.stays[this.stayId];
    this.tripDetail = this.tripDetailService.getTripDetail();
    this.user = this.bookingMainService.getUser();
    this.sumPrice = this.tripDetailService.getNumberOfNights() * this.accomodation.pricePerDay;
  }
  setUpDates(startDate: Date, endDate: Date): void{
    const [startDayName, startMonth, startDayNumber] = startDate.toString().split(' ');
    const [endDayName, endMonth, endDayNumber] = endDate.toString().split(' ');
    this.fullStartDate.day = startDayNumber;
    this.fullStartDate.dayName = startDayName;
    this.fullStartDate.month = startMonth;

    this.fullEndDate.day = endDayNumber;
    this.fullEndDate.dayName = endDayName;
    this.fullEndDate.month = endMonth;
  }
}
