import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { TripDetailService } from '../../accomodation-search/trip-detail/trip-detail.service';
import { StaysService } from '../../stays.service';
import { ReserveAccomodationService } from '../reserve-accomodation.service';

@Component({
  selector: 'app-footer-reserve',
  templateUrl: './footer-reserve.component.html',
  styleUrls: ['./footer-reserve.component.css']
})
export class FooterReserveComponent implements OnInit {
  sumPrice: number;
  accomodation: Accomodation;
  stayId: number;
  buttonText = 'Next Step';
  tripDetail: TripDetail;
  constructor(private route: ActivatedRoute,
              private stayService: StaysService,
              private reserveAccomodationService: ReserveAccomodationService,
              private tripDetailService: TripDetailService) { }

  ngOnInit(): void {
    this.reserveAccomodationService.footerButtonText.subscribe(
      (value: string) => {
        this.buttonText = value;
      }
    );
    this.route.queryParams.subscribe(
      (params: Params) => {
      this.accomodation = this.stayService.getAccomodationByid(+params.accId);
      this.stayId = +params.stayId;
      this.tripDetail = new TripDetail(
        params.destination,
        params.startDate,
        params.endDate,
        params.room,
        params.adults,
        params.children);
      this.tripDetailService.countNumberOfNights(new Date(this.tripDetail.startDate), new Date(this.tripDetail.endDate));
      this.sumPrice = this.accomodation.pricePerDay * this.tripDetailService.getNumberOfNights();
    });
  }
  nextStep(): void{
    if (this.buttonText === 'Next Step'){
      this.buttonText = 'Final step';
      this.reserveAccomodationService.fillInYourInfoAction.next('check-fields');
      this.reserveAccomodationService.buttonText.next('Final step');

    }
    else if (this.buttonText === 'Final step'){
      this.buttonText = 'Book now';
      this.reserveAccomodationService.buttonText.next('Book now');
      this.reserveAccomodationService.bookingOverviewAction.next('go-on-finish-booking');
    }
  }
}
