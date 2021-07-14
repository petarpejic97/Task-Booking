import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Destination } from '../../../shared/destination.model';
import { StaysService } from '../stays.service';

@Component({
  selector: 'app-search-destination',
  templateUrl: './search-destination.component.html',
  styleUrls: ['./search-destination.component.css']
})
export class SearchDestinationComponent implements OnInit {
  cityCtrl = new FormControl();
  filteredCities: Observable<Destination[]>;
  destinations: Destination[];
  constructor(private stayServce: StaysService) {
    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(destination => destination ? this._filterCities(destination) : this.destinations.slice())
      );
   }
  ngOnInit(): void {
    this.destinations = this.stayServce.getSoakSunDestinations();
  }
  stylize(): void{
    const cdk = document.querySelector('.cdk-overlay-pane') as HTMLElement;
    cdk.style.position = 'absolute';
    cdk.style.width = '100%';
    cdk.style.top = '4em';
    cdk.style.left = '0';
  }
  private _filterCities(value: string): Destination[] {
    const filterValue = value.toLowerCase();
    return this.destinations.filter(destination => destination.city.toLowerCase().indexOf(filterValue) === 0);
  }
}
