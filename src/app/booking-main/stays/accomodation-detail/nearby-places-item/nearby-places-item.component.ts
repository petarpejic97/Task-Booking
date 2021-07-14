import { Component, Input, OnInit } from '@angular/core';
import { NearbyPlace } from 'src/app/shared/nearby-place.model';

@Component({
  selector: 'app-nearby-places-item',
  templateUrl: './nearby-places-item.component.html',
  styleUrls: ['./nearby-places-item.component.css']
})
export class NearbyPlacesItemComponent implements OnInit {
  @Input() nearbyPlace: NearbyPlace;
  constructor() { }

  ngOnInit(): void {
  }

}
