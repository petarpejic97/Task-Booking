import { Injectable } from '@angular/core';
import { Ask } from 'src/app/shared/ask.model';
import { NearbyPlace } from 'src/app/shared/nearby-place.model';
import { TemporarilyClosed } from 'src/app/shared/temporarily-closed.model';
import { UserComment } from 'src/app/shared/user-comment.model';
import userComments from '../../../_files/userComments.json';
import asks from '../../../_files/asks.json';
import temporarilyClosedList from '../../../_files/temporarilyClosedList.json';
import nearbyPlaces from '../../../_files/nearbyPlaces.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccomodationDetailService {

  comments: UserComment[] = userComments;

  asks: Ask[] = asks;

  temporarilyClosedList: TemporarilyClosed[] = temporarilyClosedList;

  nearbyPlaces: NearbyPlace[] = nearbyPlaces;

  seeMore = new Subject<string>();

  constructor() { }

  getComments(): UserComment[]{
    return this.comments;
  }
  getAsks(): Ask[]{
    return this.asks;
  }
  getTemporarilyClosed(): TemporarilyClosed[]{
    return this.temporarilyClosedList;
  }
  getNearbyPlaces(): NearbyPlace[]{
    return this.nearbyPlaces;
  }
}
