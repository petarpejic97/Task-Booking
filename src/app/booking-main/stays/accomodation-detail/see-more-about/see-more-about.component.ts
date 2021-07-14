import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { Facility } from 'src/app/shared/facility.model';
import { Health } from 'src/app/shared/health.model';
import { Policy } from 'src/app/shared/policy.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import facilities from '../../../../_files/facilities.json';
import health from '../../../../_files/health.json';
import policies from '../../../../_files/policies.json';
import { StaysService } from '../../stays.service';

@Component({
  selector: 'app-see-more-about',
  templateUrl: './see-more-about.component.html',
  styleUrls: ['./see-more-about.component.css']
})
export class SeeMoreAboutComponent implements OnInit {

  id: number;
  tripDetail: TripDetail;
  accomodation: Accomodation;
  facilities: Facility[] = facilities;
  health: Health[] = health;
  policies: Policy[] = policies;
  selectedTab: number;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private staysService: StaysService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.id = +params.accId;
      this.accomodation = this.staysService.getAccomodationByid(this.id);
      this.selectedTab = +params.subtitle;
      this.tripDetail = new TripDetail(
        params.destination,
        params.startDate,
        params.endDate,
        params.room,
        params.adults,
        params.children
      );
    });
  }
  back(): void{
    this.router.navigate(['../'], {
      relativeTo: this.route,
      queryParams:
        {
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
