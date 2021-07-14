import { Component, OnInit } from '@angular/core';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { TripDetailService } from './trip-detail.service';
import { MatDialog } from '@angular/material/dialog';
import { PeopleRoomNeedsComponent } from './people-room-needs/people-room-needs.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {
  tripDetail: TripDetail;
  range: FormGroup;
  tomorrow: Date;
  constructor(private dialog: MatDialog,
              private router: Router,
              private tripDetailService: TripDetailService,
              private route: ActivatedRoute) {
                const today = new Date();

                this.tomorrow = new Date(today);
                this.tomorrow.setDate(this.tomorrow.getDate() + 1);

                this.range = new FormGroup({
                  start: new FormControl(today),
                  end: new FormControl(this.tomorrow)
                });

              }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (Object.keys(params).length !== 0){
          this.tripDetail = new TripDetail(
            params.destination,
            params.startDate,
            params.endDate,
            params.room,
            params.adults,
            params.children);
        }
      }
    );
    this.tripDetail = this.tripDetailService.getTripDetail();
    this.tripDetailService.tripDetailChanged
      .subscribe(
        (tripDetail: TripDetail) => {
          this.tripDetail = tripDetail;
        }
      );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PeopleRoomNeedsComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  sendDataToSearchResults(): void{
    this.tripDetailService.updateDates(this.range.value.start, this.range.value.end);
    this.router.navigate(
      ['../accomodation-list'],
      {relativeTo: this.route,
        queryParams:
        { destination: this.tripDetail.destination,
          room: this.tripDetail.roomNumber,
          adults: this.tripDetail.adultsNumber,
          children: this.tripDetail.childrenNumber,
          startDate: this.tripDetail.startDate,
          endDate: this.tripDetail.endDate }
        },
    );
  }
}
