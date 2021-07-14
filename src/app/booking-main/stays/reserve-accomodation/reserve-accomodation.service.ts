import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReserveAccomodationService {
  colorizeHeader = new Subject<string>();
  buttonText = new Subject<string>();
  footerButtonText = new Subject<string>();
  fillInYourInfoAction = new Subject<string>();
  bookingOverviewAction = new Subject<string>();
  constructor() { }
}
