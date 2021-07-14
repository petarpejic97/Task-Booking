import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing-module';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BookingMainComponent } from './booking-main/booking-main.component';
import { StaysComponent } from './booking-main/stays/stays.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { CalendarModule } from 'primeng/calendar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchDestinationComponent } from './booking-main/stays/search-destination/search-destination.component';
import { DestinationItemComponent } from './booking-main/stays/search-destination/destination-item/destination-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateAccountComponent } from './sign-up/create-account/create-account.component';
import { ConnectWithFacebookComponent } from './sign-up/connect-with-facebook/connect-with-facebook.component';
import { CreateAccOrSinginComponent } from './sign-up/create-acc-or-singin/create-acc-or-singin.component';
import { AccomodationListComponent } from './booking-main/stays/accomodation-list/accomodation-list.component';
import { HeaderComponent } from './booking-main/stays/accomodation-search/header/header.component';
import { HeaderItemsOptonsComponent } from './booking-main/stays/accomodation-search/header-items-optons/header-items-optons.component';
import { TripDetailComponent } from './booking-main/stays/accomodation-search/trip-detail/trip-detail.component';
import { PeopleRoomNeedsComponent } from './booking-main/stays/accomodation-search/trip-detail/people-room-needs/people-room-needs.component';
import { AccomodationItemComponent } from './booking-main/stays/accomodation-list/accomodation-item/accomodation-item.component';
import { AccomodationSearchComponent } from './booking-main/stays/accomodation-search/accomodation-search.component';
import { AccomodationDetailComponent } from './booking-main/stays/accomodation-detail/accomodation-detail.component';
import { HeaderAccomodationDetailComponent } from './booking-main/stays/accomodation-detail/header-accomodation-detail/header-accomodation-detail.component';
import { UsersCommentsItemComponent } from './booking-main/stays/accomodation-detail/users-comments-item/users-comments-item.component';
import { TravelersAskingItemComponent } from './booking-main/stays/accomodation-detail/travelers-asking-item/travelers-asking-item.component';
import { TemporarilyClosedItemComponent } from './booking-main/stays/accomodation-detail/temporarily-closed-item/temporarily-closed-item.component';
import { NearbyPlacesItemComponent } from './booking-main/stays/accomodation-detail/nearby-places-item/nearby-places-item.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { SidenavItemComponent } from './booking-main/stays/accomodation-search/sidenav-item/sidenav-item.component';
import { ChooseStayComponent } from './booking-main/stays/choose-stay/choose-stay.component';
import { PickStayComponent } from './booking-main/stays/choose-stay/pick-stay/pick-stay.component';
import { HeaderPickStayComponent } from './booking-main/stays/choose-stay/pick-stay/header-pick-stay/header-pick-stay.component';
import { StayItemComponent } from './booking-main/stays/choose-stay/pick-stay/stay-item/stay-item.component';
import { ReserveAccomodationComponent } from './booking-main/stays/reserve-accomodation/reserve-accomodation.component';
import { DialogAlreadySelectedComponent } from './booking-main/stays/choose-stay/pick-stay/dialog-already-selected/dialog-already-selected.component';
import { MatSelectModule } from '@angular/material/select';
import { HeaderReserveAccomodationComponent } from './booking-main/stays/reserve-accomodation/header-reserve-accomodation/header-reserve-accomodation.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FillInYourInfoComponent } from './booking-main/stays/reserve-accomodation/fill-in-your-info/fill-in-your-info.component';
import { BookingOverviewComponent } from './booking-main/stays/reserve-accomodation/booking-overview/booking-overview.component';
import { FooterReserveComponent } from './booking-main/stays/reserve-accomodation/footer-reserve/footer-reserve.component';
import { FinishBookingComponent } from './booking-main/stays/reserve-accomodation/finish-booking/finish-booking.component';
import { MatMenuModule } from '@angular/material/menu';
import { SeeMoreAboutComponent } from './booking-main/stays/accomodation-detail/see-more-about/see-more-about.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DestinationContainerComponent } from './booking-main/stays/accomodation-search/destination-container/destination-container.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    CreateAccountComponent,
    ConnectWithFacebookComponent,
    BookingMainComponent,
    HeaderComponent,
    HeaderItemsOptonsComponent,
    StaysComponent,
    SearchDestinationComponent,
    DestinationItemComponent,
    TripDetailComponent,
    PeopleRoomNeedsComponent,
    AccomodationItemComponent,
    CreateAccOrSinginComponent,
    AccomodationListComponent,
    AccomodationSearchComponent,
    AccomodationDetailComponent,
    HeaderAccomodationDetailComponent,
    UsersCommentsItemComponent,
    TravelersAskingItemComponent,
    TemporarilyClosedItemComponent,
    NearbyPlacesItemComponent,
    SidenavItemComponent,
    ChooseStayComponent,
    PickStayComponent,
    HeaderPickStayComponent,
    StayItemComponent,
    ReserveAccomodationComponent,
    DialogAlreadySelectedComponent,
    HeaderReserveAccomodationComponent,
    FillInYourInfoComponent,
    BookingOverviewComponent,
    FooterReserveComponent,
    FinishBookingComponent,
    SeeMoreAboutComponent,
    DestinationContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
