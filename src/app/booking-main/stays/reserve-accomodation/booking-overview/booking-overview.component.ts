import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookingMainService } from 'src/app/booking-main/booking-main.service';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { Stay } from 'src/app/shared/stay.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { User } from 'src/app/shared/user.model';
import { TripDetailService } from '../../accomodation-search/trip-detail/trip-detail.service';
import { StaysService } from '../../stays.service';
import { ReserveAccomodationService } from '../reserve-accomodation.service';

@Component({
  selector: 'app-booking-overview',
  templateUrl: './booking-overview.component.html',
  styleUrls: ['./booking-overview.component.css']
})
export class BookingOverviewComponent implements OnInit {
  sumPrice: number;
  accomodation: Accomodation;
  accId: number;
  stayId: number;
  checkin: string;
  checkout: string;
  numberOfNights: number;
  tripDetail: TripDetail;
  stay: Stay;
  user: User;
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
  times: string[] = [
    'I dont know',
    '00:00-01:00',
    '01:00-02:00',
    '02:00-03:00',
    '03:00-04:00',
    '04:00-05:00',
    '05:00-06:00',
    '06:00-07:00',
    '07:00-08:00',
    '08:00-09:00',
    '09:00-10:00',
    '00:00-11:00',
    '11:00-12:00',
    '12:00-13:00',
    '13:00-14:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
    '17:00-18:00',
    '18:00-19:00',
    '19:00-20:00',
    '20:00-21:00',
    '21:00-22:00',
    '22:00-23:00',
    '23:00-00:00',
    '00:00-01:00(next day)',
    '01:00-02:00(next day)',
  ];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private stayService: StaysService,
              private tripDetailService: TripDetailService,
              private bookingMainService: BookingMainService,
              private reserveAccomodationService: ReserveAccomodationService) { }

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
      this.setUI();
    });
    this.reserveAccomodationService.bookingOverviewAction.subscribe(
      (value) => {
        if (value === 'go-on-finish-booking'){
          this.router.navigate(
            ['../finish-booking'], {
              relativeTo: this.route,
              queryParams:
                {
                  accId: this.accomodation.id,
                  stayId: this.stayId,
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
    );
  }
  setUI(): void{
    this.user = this.bookingMainService.getUser();
    this.tripDetailService.countNumberOfNights(new Date(this.tripDetail.startDate), new Date(this.tripDetail.endDate));
    this.numberOfNights = this.tripDetailService.getNumberOfNights();
    this.stay = this.accomodation.stays[this.stayId];
    this.sumPrice = this.tripDetailService.getNumberOfNights() * this.accomodation.pricePerDay;
    this.setUpDates(new Date(this.tripDetail.startDate), new Date(this.tripDetail.endDate));
  }
  setUpDates(startDate: Date, endDate: Date): void{
    const [startDayName, startMonth, startDayNumber, startYear] = startDate.toString().split(' ');
    const [endDayName, endMonth, endDayNumber, endYear] = endDate.toString().split(' ');
    this.fullStartDate.day = startDayNumber;
    this.fullStartDate.dayName = startDayName;
    this.fullStartDate.month = startMonth;
    this.fullStartDate.year = startYear;

    this.fullEndDate.day = endDayNumber;
    this.fullEndDate.dayName = endDayName;
    this.fullEndDate.month = endMonth;
    this.fullEndDate.year = endYear;
  }

}
