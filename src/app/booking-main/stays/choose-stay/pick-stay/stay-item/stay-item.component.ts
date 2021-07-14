import { EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Params } from '@angular/router';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { TripDetail } from 'src/app/shared/trip-detail.model';
import { TripDetailService } from '../../../accomodation-search/trip-detail/trip-detail.service';
import { StaysService } from '../../../stays.service';

@Component({
  selector: 'app-stay-item',
  templateUrl: './stay-item.component.html',
  styleUrls: ['./stay-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StayItemComponent implements OnInit {
  @Input() stay;
  @Input() isSelected;
  @Output() changeSelected = new EventEmitter<void>();
  @Output() showBackdrop = new EventEmitter<void>();
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  firstStayIcon: string;
  secondStayIcon: string;
  thirdStayIcon: string;
  numberOfNights: number;
  sumPrice: number;
  id: number;
  stayId: number;
  accomodation: Accomodation;
  isSelectedItem = false;
  tripDetail: TripDetail;
  constructor(private staysService: StaysService,
              private route: ActivatedRoute,
              private tripDetailService: TripDetailService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
      this.accomodation = this.staysService.getAccomodationByid(+params.accId);
      this.tripDetail = new TripDetail(
        params.destination,
        params.startDate,
        params.endDate,
        params.room,
        params.adults,
        params.childre
      );
      this.setUpUI();
    });
  }
  setUpUI(): void{
    this.tripDetailService.countNumberOfNights(new Date(this.tripDetail.startDate), new Date(this.tripDetail.endDate));
    this.numberOfNights = this.tripDetailService.getNumberOfNights();
    this.sumPrice = this.numberOfNights * this.accomodation.pricePerDay;
  }
  getAdvantagePropertyIcon(stayInfo: string): string{
    let icon;
    switch (stayInfo){
      case 'Partially refundable': {
        icon = 'tonality';
        break;
      }
      case 'Breakfast included': {
        icon = 'free_breakfast';
        break;
      }
      case 'Pay at the property': {
        icon = 'history';
        break;
      }
      case 'Non-refundable': {
        icon = 'not_interested';
        break;
      }
      case 'Pay in advance': {
        icon = 'monetization_on';
      }
    }
    return icon;
  }

  getAdvantageIcon(advantage: string): string{
    let advantageIcon;
    switch (advantage){
      case 'Free WiFi': {
        advantageIcon = 'wifi';
        break;
      }
      case 'Air conditioning': {
        advantageIcon = 'ac_unit';
        break;
      }
      case 'Private bathroom': {
        advantageIcon = 'bathtub';
        break;
      }
      case 'Flat-screen TV': {
        advantageIcon = 'tv';
        break;
      }
      case 'Soundproof': {
        advantageIcon = 'volume_off';
        break;
      }
      case 'Balcony with view': {
        advantageIcon = 'visibility';
        break;
      }
      case 'Balcony, Ocean view': {
        advantageIcon = 'visibility';
        break;
      }
      case 'Spa tub': {
        advantageIcon = 'hot_tub';
        break;
      }
      case 'Washing machine': {
        advantageIcon = 'microwave';
        break;
      }
      case 'Kitchen': {
        advantageIcon = 'restaurant';
        break;
      }
      case 'View': {
        advantageIcon = 'visibility';
        break;
      }
      case 'Kitchenware': {
        advantageIcon = 'restaurant';
        break;
      }
      case 'Bathtub or shower': {
        advantageIcon = 'bathtub';
        break;
      }
      case 'Balcony, City view': {
        advantageIcon = 'visibility';
        break;
      }
    }
    return advantageIcon;
  }
  selectRoom(): void{
    if (this.isSelected !== true){
      this.changeSelected.emit();
      this.isSelectedItem = !this.isSelectedItem;
    }
     else{
       this.showBackdrop.emit();
     }
  }
  showMenu(): void{
    this.trigger.openMenu();
  }
  removeRoom(): void{
    this.isSelectedItem = !this.isSelectedItem;
    this.changeSelected.emit();
  }

}
