import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { Stay } from 'src/app/shared/stay.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { TripDetailService } from '../../accomodation-search/trip-detail/trip-detail.service';
import { StaysService } from '../../stays.service';
import { DialogAlreadySelectedComponent } from './dialog-already-selected/dialog-already-selected.component';

@Component({
  selector: 'app-pick-stay',
  templateUrl: './pick-stay.component.html',
  styleUrls: ['./pick-stay.component.css'],
})
export class PickStayComponent implements OnInit {

  accomodation: Accomodation;
  stays: Stay[];
  isSelected = false;
  selectedStay: Stay;
  showBackdrop = false;
  numberOfAdults: number;
  fitsNumber = 0;
  fitsColor = 'black';
  fitsText: string;
  fitsSubText = 'adults';
  tripDetail: TripDetail;

  constructor(private stayService: StaysService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private tripDetailService: TripDetailService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
      this.accomodation = this.stayService.getAccomodationByid(+params.accId);
      this.tripDetail = new TripDetail(
        params.destination,
        params.startDate,
        params.endDate,
        params.room,
        params.adults,
        params.children);
      this.tripDetailService.countNumberOfNights(new Date(this.tripDetail.startDate), new Date(this.tripDetail.endDate));
    });
    this.numberOfAdults = this.tripDetailService.getNumberOfAdults();
    this.fitsText = 'Fits ' + this.fitsNumber + ' of ' + this.numberOfAdults;

  }
  selectStay(stay: Stay): void{
    if (!this.selectedStay){
      this.isSelected = true;
      this.selectedStay = stay;
      this.updateFooterOnSelected();
    }
    else{
      this.isSelected = false;
      delete this.selectedStay;
      this.updateFooterUnselected();
    }
  }
  updateFooterUnselected(): void{
    this.fitsColor = 'black';
    this.fitsText = 'Fits 0' + ' of ' + this.numberOfAdults;
    this.fitsSubText = 'adults';
  }
  updateFooterOnSelected(): void{
    this.fitsColor = 'green';
    this.fitsNumber = this.numberOfAdults;
    this.fitsText = 'Fits ' + this.fitsNumber + ' of ' + this.numberOfAdults;
    setTimeout(() => {
      this.fitsColor = 'black';
      this.fitsText = '€ ' + this.accomodation.pricePerDay * this.tripDetailService.getNumberOfNights();
      this.fitsSubText = 'Includes taxes and charges';
    }, 1000);
  }
  openDialog(): void{
    const dialogRef = this.dialog.open(DialogAlreadySelectedComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  reserveAccomodation(): void{
    localStorage.setItem('accId', this.accomodation.id.toString());
    localStorage.setItem('tripDetail', JSON.stringify(this.tripDetail));
    localStorage.setItem('visibility', '1');
    if (this.isSelected){
      this.router.navigate(['../../reserve-accomodation/fill-your-info'], {
        relativeTo: this.route,
        queryParams:
          {
            accId: this.accomodation.id,
            stayId: this.selectedStay.id,
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
