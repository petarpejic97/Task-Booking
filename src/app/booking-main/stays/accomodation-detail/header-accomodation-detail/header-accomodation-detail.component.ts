import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { StaysService } from '../../stays.service';

@Component({
  selector: 'app-header-accomodation-detail',
  templateUrl: './header-accomodation-detail.component.html',
  styleUrls: ['./header-accomodation-detail.component.css']
})
export class HeaderAccomodationDetailComponent implements OnInit {
  tripDetail: TripDetail;
  accomodation: Accomodation;
  dateWithoutYear: string;
  id: number;
  dateParts: string;
  constructor(private staysService: StaysService,
              private route: ActivatedRoute,
              private router: Router) { }

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
    });
  }
  setUpUI(): void{
    this.accomodation = this.staysService.getAccomodationByid(this.id);
    const [startDayName, startMonth, startDayNumber] = this.tripDetail.startDate.toString().split(' ');
    const [endDayName, endMonth, endDayNumber] = this.tripDetail.endDate.toString().split(' ');
    this.dateWithoutYear = `${startMonth} ${startDayNumber} - ${endMonth} ${endDayNumber}`;
  }
  back(): void{
    this.router.navigate(['../accomodation-list'], {
      relativeTo: this.route,
      queryParams:
        {
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
