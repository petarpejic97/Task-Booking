import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { Ask } from 'src/app/shared/ask.model';
import { NearbyPlace } from 'src/app/shared/nearby-place.model';
import { TemporarilyClosed } from 'src/app/shared/temporarily-closed.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { UserComment } from 'src/app/shared/user-comment.model';
import { TripDetailService } from '../accomodation-search/trip-detail/trip-detail.service';
import { StaysService } from '../stays.service';
import { AccomodationDetailService } from './accomodation-detail.service';


@Component({
  selector: 'app-accomodation-detail',
  templateUrl: './accomodation-detail.component.html',
  styleUrls: ['./accomodation-detail.component.css'],
})
export class AccomodationDetailComponent implements OnInit {

  panelOpenState = true;
  asks: Ask[];
  temporarilyClosedList: TemporarilyClosed[];
  nearbyPlaces: NearbyPlace[];
  id: number;
  accomodation: Accomodation;
  sumPrice: number;
  tripDetail: TripDetail;
  fullStartDate: {
    day: number,
    dayName: string,
    month: string,
    year: number
  } = {
    day: 0,
    dayName: '',
    month: '',
    year: 0,
  };

  fullEndDate: {
    day: number,
    dayName: string,
    month: string,
    year: number
  } = {
    day: 0,
    dayName: '',
    month: '',
    year: 0,
  };
  numberOfNights: number;
  scrolled = true;
  prevScrollpos = 0;
  scrollTopCounter = 0;
  scrollDownCounter = 0;
  toggleSearchBar = true;
  comments: UserComment[];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private accomodationDetailService: AccomodationDetailService,
              private router: Router,
              private route: ActivatedRoute,
              private stayService: StaysService,
              private tripDetailService: TripDetailService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params: Params) => {
      this.id = +params.accId;
      this.tripDetail = new TripDetail(
        params.destination,
        params.startDate,
        params.endDate,
        params.room,
        params.adults,
        params.children
      );
      this.setUpUI();
      this.setUpDates(new Date(this.tripDetail.startDate), new Date(this.tripDetail.endDate));
    });
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event): void {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.toggleSearchBar = true;
    }
    else {
      if (window.scrollY >= 30){
        this.toggleSearchBar = false;
      }
    }
    this.prevScrollpos = currentScrollPos;
  }
  setUpUI(): void{
    this.tripDetailService.countNumberOfNights(new Date(this.tripDetail.startDate), new Date(this.tripDetail.endDate));
    this.numberOfNights = this.tripDetailService.getNumberOfNights();
    this.accomodation = this.stayService.getAccomodationByid(this.id);
    this.sumPrice = this.tripDetailService.getNumberOfNights() * this.accomodation.pricePerDay;
    this.comments = this.accomodationDetailService.getComments();
    this.asks = this.accomodationDetailService.getAsks();
    this.temporarilyClosedList = this.accomodationDetailService.getTemporarilyClosed();
    this.nearbyPlaces = this.accomodationDetailService.getNearbyPlaces();
  }
  setUpDates(startDate: Date, endDate: Date): void{
    this.fullStartDate.day = startDate.getDate();
    this.fullStartDate.dayName = this.getDayName(startDate.getDay());
    this.fullStartDate.month = this.getMonthName(startDate.getMonth());
    this.fullStartDate.year = startDate.getFullYear();

    this.fullEndDate.day = endDate.getDate();
    this.fullEndDate.dayName = this.getDayName(endDate.getDay());
    this.fullEndDate.month = this.getMonthName(endDate.getMonth());
    this.fullEndDate.year = endDate.getFullYear();
  }
  onSelectRoomClick(): void{
    this.router.navigate(['../choose-your-stay/pick-stay'], {
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
  getDayName(day: number): string{
    if (day === 0){
      return this.days[6];
    }
    else{
      return this.days[day - 1];
    }
  }
  getMonthName(month: number): string{
    return this.months[month];
  }
  openSeeMoreAbout(subtitleNum: string): void{
    this.router.navigate(['../accomodation/see-more'], {
      relativeTo: this.route,
      queryParams:
        {
          accId: this.accomodation.id,
          destination: this.tripDetail.destination,
          room: this.tripDetail.roomNumber,
          adults: this.tripDetail.adultsNumber,
          children: this.tripDetail.childrenNumber,
          startDate: this.tripDetail.startDate,
          endDate: this.tripDetail.endDate,
          subtitle: subtitleNum
        }
      }
    );
  }
}
