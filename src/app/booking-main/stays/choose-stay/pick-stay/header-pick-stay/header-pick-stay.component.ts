import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { StaysService } from '../../../stays.service';

@Component({
  selector: 'app-header-pick-stay',
  templateUrl: './header-pick-stay.component.html',
  styleUrls: ['./header-pick-stay.component.css']
})
export class HeaderPickStayComponent implements OnInit {

  tripDetail: TripDetail;
  dateWithoutYear: string;
  id: number;
  constructor(private staysService: StaysService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
      this.id = +params.accId;
      this.tripDetail = new TripDetail(
        params.destination,
        params.startDate,
        params.endDate,
        params.room,
        params.adults,
        params.children);
      this.setUpUI();
    });

  }
  setUpUI(): void{
    const [startDayName, startMonth, startDayNumber] = this.tripDetail.startDate.toString().split(' ');
    const [endDayName, endMonth, endDayNumber] = this.tripDetail.endDate.toString().split(' ');
    this.dateWithoutYear = startMonth + ' ' + startDayNumber + ' - ' + endMonth + ' ' + endDayNumber;
  }
  back(): void{
    this.router.navigate(
      ['../../accomodation'],
      {
        relativeTo: this.route,
        queryParams: {
          accId: this.id,
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
