import { Component, OnInit } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { DestinationContainer } from 'src/app/shared/destinationContainer.model';
import { SidenavItem } from 'src/app/shared/sidenav-item.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { StaysService } from '../stays.service';
import { TripDetailService } from './trip-detail/trip-detail.service';

@Component({
  selector: 'app-accomodation-search',
  templateUrl: './accomodation-search.component.html',
  styleUrls: ['./accomodation-search.component.css'],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'never'}}
  ],
})
export class AccomodationSearchComponent implements OnInit{
  showFiller = false;
  panelOpenState = false;
  sidenavList: SidenavItem[];
  destinationsContainers: DestinationContainer[];
  accomodation: Accomodation;
  accId: number;
  tripDetail: TripDetail;
  numberOfNights: number;
  sumPrice: number;
  startDay: string;
  endDay: string;
  startMonth: string;
  endMonth: string;
  visbility: string;
  constructor(private stayService: StaysService,
              private tripDetailService: TripDetailService) { }

  ngOnInit(): void {
    this.setUpUi();
    this.setUpDates();
    this.visbility = localStorage.getItem('visibility');
  }
  setUpUi(): void{
    this.accomodation = this.stayService.getAccomodationByid(+localStorage.getItem('accId'));
    if(localStorage.getItem('tripDetail')){
      this.tripDetail = JSON.parse(localStorage.getItem('tripDetail'));
    }
    else{
      this.tripDetail = {
        "destination": "",
        "adultsNumber": 1,
        "childrenNumber": 0,
        "endDate": new Date(),
        "roomNumber": 1,
        "startDate": new Date
      };
      localStorage.setItem('visibility', '0');
    }
    console.log(this.tripDetail)
    this.tripDetailService.countNumberOfNights(new Date(this.tripDetail.startDate), new Date(this.tripDetail.endDate));
    this.numberOfNights = this.tripDetailService.getNumberOfNights();
    this.sumPrice = this.tripDetailService.getNumberOfNights() * this.accomodation.pricePerDay;
    this.destinationsContainers = this.stayService.getDestinationContainers();
    this.sidenavList = this.stayService.getSidenavitems();
  }
  setUpDates(): void{
    const [startday, startmonth, startdayInMonth] = this.tripDetail.startDate.toString().split(' ');
    const [endday, endmonth, enddayInMonth] = this.tripDetail.endDate.toString().split(' ');

    this.startDay = startdayInMonth;
    this.startMonth = startmonth;
    this.endDay = enddayInMonth;
    this.endMonth = endmonth;
  }
  hideFinishBooking(): void{
    const element = document.querySelector('.finish-booking-container') as HTMLElement;
    element.style.display = 'none';
    localStorage.setItem('visibility', '0');
  }
}
