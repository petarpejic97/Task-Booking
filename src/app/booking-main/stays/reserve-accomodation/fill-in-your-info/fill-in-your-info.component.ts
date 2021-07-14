import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookingMainService } from 'src/app/booking-main/booking-main.service';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { User } from 'src/app/shared/user.model';
import { StaysService } from '../../stays.service';
import { ReserveAccomodationService } from '../reserve-accomodation.service';

@Component({
  selector: 'app-fill-in-your-info',
  templateUrl: './fill-in-your-info.component.html',
  styleUrls: ['./fill-in-your-info.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FillInYourInfoComponent implements OnInit {
  accomodation: Accomodation;
  stayId: number;
  tripDetail: TripDetail;
  user: User;
  userInfo: FormGroup;

  checked = false;
  checkedWantMore = false;
  checkedSaveTime = true;

constructor(private reserveAccomodationService: ReserveAccomodationService,
            private router: Router,
            private route: ActivatedRoute,
            private stayService: StaysService,
            private bookingMainService: BookingMainService) { }

ngOnInit(): void {
  this.user = this.bookingMainService.getUser();
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
  });

  this.reserveAccomodationService.fillInYourInfoAction.subscribe(
      (value) => {
          if (value === 'check-fields'){
            if (this.userInfo.valid){
              this.saveUserInfo();
              this.router.navigate(['../booking-overview'], {
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
      }
    );

  this.userInfo = new FormGroup({
      firstNameFormControl : new FormControl(this.user.firstName, [
        Validators.required
      ]),
      lastNameFormControl : new FormControl(this.user.lastName, [
        Validators.required
      ]),
      emailFormControl : new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
        Validators.minLength(2)
      ]),
      addressFormControl : new FormControl(this.user.address, [
        Validators.required,
        Validators.minLength(2)
      ]),
      zipCodeFormControl : new FormControl(this.user.zipCode, [
        Validators.required,
        Validators.minLength(5)
      ]),
      countryFormControl : new FormControl(this.user.country, [
        Validators.required,
        Validators.minLength(2)
      ]),
      mobilePhoneFormControl : new FormControl(this.user.mobilePhone, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }
  saveUserInfo(): void{
    const user = new User(this.userInfo.value.firstNameFormControl,
                          this.userInfo.value.lastNameFormControl,
                          this.userInfo.value.emailFormControl,
                          this.userInfo.value.addressFormControl,
                          this.userInfo.value.zipCodeFormControl,
                          this.userInfo.value.countryFormControl,
                          this.userInfo.value.mobilePhoneFormControl);
    this.stayService.saveUserInfo(user);
  }
}
