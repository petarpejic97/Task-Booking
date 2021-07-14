import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { ReserveAccomodationService } from '../reserve-accomodation.service';

@Component({
  selector: 'app-header-reserve-accomodation',
  templateUrl: './header-reserve-accomodation.component.html',
  styleUrls: ['./header-reserve-accomodation.component.css']
})
export class HeaderReserveAccomodationComponent implements OnInit, AfterViewInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  buttonText = 'Next Step';
  accId: number;
  stayId: number;
  tripDetail: TripDetail;
  componentTitle = 'Fill in your info';
  @ViewChild('stepper') private stepper: MatStepper;

  constructor(private reserveAccomodationService: ReserveAccomodationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngAfterViewInit(): void {
    const stepWrapper = document.querySelector('[aria-posinset="4"]');
    const iconContainer = stepWrapper.querySelector('.mat-step-icon-content');
    const lastIcon = document.createElement('span');
    lastIcon.classList.add('material-icons');
    lastIcon.textContent = 'done';
    lastIcon.style.display = 'block';
    lastIcon.style.color = 'blue';
    lastIcon.style.position = 'absolute';
    lastIcon.style.left = '50%';
    lastIcon.style.top = '50%';
    lastIcon.style.transform = 'translate(-50%, -50%)';
    lastIcon.style.fontSize = '1em';
    iconContainer.appendChild(lastIcon);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.accId = +params.accId;
        this.stayId = +params.stayId;
        this.tripDetail = new TripDetail(
          params.destination,
          params.startDate,
          params.endDate,
          params.room,
          params.adults,
          params.children);
      }
    );

    this.reserveAccomodationService.buttonText.subscribe(
      (value) => {
        this.stepper.next();
        if (value === 'Final step'){
          this.componentTitle = 'Booking Overview';
        }
        else if (value === 'Book now'){
          this.componentTitle = 'Finish booking';
        }
        else{
          this.componentTitle = 'Fill in your info';
        }
        this.buttonText = value;
      }
    );
  }
  back(): void{
    this.stepper.previous();
    if (this.buttonText === 'Next Step'){
      this.router.navigate(['../choose-your-stay/pick-stay'], {
        relativeTo: this.route,
        queryParams:
          {
            accId: this.accId,
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
    else if (this.buttonText === 'Final step'){
      this.reserveAccomodationService.footerButtonText.next('Next Step');
      this.buttonText = 'Next Step';
      this.componentTitle = 'Fill in your info';
      this.router.navigate(['../reserve-accomodation/fill-your-info'], {
        relativeTo: this.route,
        queryParams:
          {
            accId: this.accId,
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
    else if (this.buttonText === 'Book now'){
      this.reserveAccomodationService.footerButtonText.next('Final step');
      this.buttonText = 'Final step';
      this.componentTitle = 'Booking overview';
      this.router.navigate(['../reserve-accomodation/booking-overview'], {
        relativeTo: this.route,
        queryParams:
          {
            accId: this.accId,
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
}
