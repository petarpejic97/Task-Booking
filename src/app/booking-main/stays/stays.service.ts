import { Injectable } from '@angular/core';
import { Accomodation } from 'src/app/shared/accomodation.model';
import { Destination } from 'src/app/shared/destination.model';
import { SidenavItem } from 'src/app/shared/sidenav-item.model';
import { Stay } from 'src/app/shared/stay.model';
import { User } from 'src/app/shared/user.model';
import destinations from '../../_files/destinations.json';
import accomodations from '../../_files/accomodations.json';
import sidenavList from '../../_files/sidenavList.json';
import destinationContainer from '../../_files/destinationContainers.json';
import { DestinationContainer } from 'src/app/shared/destinationContainer.model';

@Injectable({
  providedIn: 'root'
})
export class StaysService {
  destinations: Destination[] = destinations;
  accomodations: Accomodation[] = accomodations;
  sidenavList: SidenavItem[] = sidenavList;
  destinationContainer: DestinationContainer[] = destinationContainer;
  selectedStay: Stay;
  user: User;
  constructor() { }

  getDestinationContainers(): DestinationContainer[]{
    return this.destinationContainer;
  }
  getSoakSunDestinations(): Destination[]{
    return this.destinations;
  }
  getAllAccomodations(): Accomodation[]{
    return this.accomodations;
  }
  getAccomodationByid(id: number): Accomodation{
    return this.accomodations.find(accomodation => accomodation.id === id);
  }
  getSidenavitems(): SidenavItem[]{
    return this.sidenavList;
  }
  saveUserInfo(user: User): void{
    this.user = user;
  }
}
