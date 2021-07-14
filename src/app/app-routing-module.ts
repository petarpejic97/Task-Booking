import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingMainComponent } from './booking-main/booking-main.component';
import { AccomodationDetailComponent } from './booking-main/stays/accomodation-detail/accomodation-detail.component';
import { SeeMoreAboutComponent } from './booking-main/stays/accomodation-detail/see-more-about/see-more-about.component';
import { AccomodationListComponent } from './booking-main/stays/accomodation-list/accomodation-list.component';
import { AccomodationSearchComponent } from './booking-main/stays/accomodation-search/accomodation-search.component';
import { ChooseStayComponent } from './booking-main/stays/choose-stay/choose-stay.component';
import { PickStayComponent } from './booking-main/stays/choose-stay/pick-stay/pick-stay.component';
import { BookingOverviewComponent } from './booking-main/stays/reserve-accomodation/booking-overview/booking-overview.component';
import { FillInYourInfoComponent } from './booking-main/stays/reserve-accomodation/fill-in-your-info/fill-in-your-info.component';
import { FinishBookingComponent } from './booking-main/stays/reserve-accomodation/finish-booking/finish-booking.component';
import { ReserveAccomodationComponent } from './booking-main/stays/reserve-accomodation/reserve-accomodation.component';
import { SearchDestinationComponent } from './booking-main/stays/search-destination/search-destination.component';
import { StaysComponent } from './booking-main/stays/stays.component';
import { ConnectWithFacebookComponent } from './sign-up/connect-with-facebook/connect-with-facebook.component';
import { CreateAccOrSinginComponent } from './sign-up/create-acc-or-singin/create-acc-or-singin.component';
import { CreateAccountComponent } from './sign-up/create-account/create-account.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRouter: Routes = [
    {path: '', redirectTo: '/booking-main', pathMatch: 'full'},
    {path: 'booking-main', component: BookingMainComponent, children: [
        {path: '', redirectTo: 'stays', pathMatch: 'full'},
        {path: 'stays', component: StaysComponent, children: [
            {path: '', redirectTo: 'accomodation-search', pathMatch: 'full'},
            {path: 'accomodation-search', component: AccomodationSearchComponent},
            {path: 'search-destination', component: SearchDestinationComponent},
            {path: 'accomodation-list', component: AccomodationListComponent},
            {path: 'accomodation', component: AccomodationDetailComponent},
            {path: 'accomodation/see-more', component: SeeMoreAboutComponent},
            {path: 'choose-your-stay', component: ChooseStayComponent, children: [
                {path: '', redirectTo: 'pick-stay', pathMatch: 'full'},
                {path: 'pick-stay', component: PickStayComponent},
            ]},
            {path: 'reserve-accomodation', component: ReserveAccomodationComponent, children: [
                {path: '', redirectTo: 'fill-your-info', pathMatch: 'full'},
                {path: 'fill-your-info', component: FillInYourInfoComponent},
                {path: 'booking-overview', component: BookingOverviewComponent},
                {path: 'finish-booking', component: FinishBookingComponent},
            ]}
        ]},
    ]},
    {path: 'signin', component: SignUpComponent, children: [
        {path: '', redirectTo: 'create-acc-or-singin', pathMatch: 'full'},
        {path: 'create-acc-or-singin', component: CreateAccOrSinginComponent},
        {path: 'create-account', component: CreateAccountComponent},
        {path: 'connect-with-facebook', component: ConnectWithFacebookComponent},
    ]},
];
@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
