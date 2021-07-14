import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TripDetail } from 'src/app/shared/trip-detail.model';

@Injectable({
  providedIn: 'root'
})
export class TripDetailService {
  tripDetail: TripDetail = {
    destination: 'Enter your destination',
    startDate: new Date(),
    endDate: new Date(),
    roomNumber: 1,
    adultsNumber: 1,
    childrenNumber: 0
  };
  numberOfNights: number;
  tripDetailChanged = new Subject<TripDetail>();
  peopleNumberChanged = new Subject<{
    rooms: number,
    adults: number,
    children: number
  }>();
  constructor() {}

  getNumberOfRooms(): number{
    return this.tripDetail.roomNumber;
  }
  getNumberOfAdults(): number{
    return this.tripDetail.adultsNumber;
  }
  getNumberOfChildren(): number{
    return this.tripDetail.childrenNumber;
  }
  getStartDate(): Date{
    return this.tripDetail.startDate;
  }
  getEndDate(): Date{
    return this.tripDetail.endDate;
  }
  getTripDetail(): TripDetail{
    return this.tripDetail;
  }
  updateDestination(destination: string): void{
    this.tripDetail.destination = destination;
    this.tripDetailChanged.next(this.tripDetail);
  }
  updatePeopleNumber(rooms: number, adults: number, children: number): void{
    this.tripDetail.roomNumber = rooms;
    this.tripDetail.adultsNumber = adults;
    this.tripDetail.childrenNumber = children;
    this.tripDetailChanged.next(this.tripDetail);
  }
  updateDates(startDate: Date, endDate: Date): void{
    this.tripDetail.startDate = startDate;
    this.tripDetail.endDate = endDate;
    this.tripDetailChanged.next(this.tripDetail);
  }
  countNumberOfNights(startDate: Date, endDate: Date): void{
    const dateStartDay = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const dateEndDay = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

    this.numberOfNights =  Math.floor((dateEndDay - dateStartDay) / (1000 * 60 * 60 * 24));
  }
  getNumberOfNights(): number{
      return this.numberOfNights;
  }
}
