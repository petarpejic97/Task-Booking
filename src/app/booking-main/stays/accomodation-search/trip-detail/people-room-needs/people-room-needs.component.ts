import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TripDetailService } from '../trip-detail.service';

@Component({
  selector: 'app-people-room-needs',
  templateUrl: './people-room-needs.component.html',
  styleUrls: ['./people-room-needs.component.css']
})
export class PeopleRoomNeedsComponent implements OnInit {
  roomsNumber = 1;
  adultsNumber = 1;
  childrenNumber = 0;
  constructor( public dialogRef: MatDialogRef<PeopleRoomNeedsComponent>,
               private tripDetailService: TripDetailService) {
                 this.roomsNumber = tripDetailService.getNumberOfRooms();
                 this.adultsNumber = tripDetailService.getNumberOfAdults();
                 this.childrenNumber = tripDetailService.getNumberOfChildren();
               }
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  decrement(variable: string): void{
    switch (variable) {
      case 'roomsNumber': {
        if (this.roomsNumber > 1){
          this.roomsNumber--;
        }
        break;
      }
      case 'adultsNumber': {
        if (this.adultsNumber > 1){
          this.adultsNumber--;
        }
        break;
      }
      case 'childrenNumber': {
        if (this.childrenNumber > 0){
          this.childrenNumber--;
        }
        break;
      }
    }
  }
  sendRoomsAndGuestsToService(): void{
    this.tripDetailService.updatePeopleNumber(this.roomsNumber, this.adultsNumber, this.childrenNumber);
    this.dialogRef.close();
  }
}
