import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class BookingMainService {
  user: User;
  constructor() {
    this.user = new User('Petar', 'Pejic', 'pejicpetar1@gmail.com', 'Osijek', '31000', 'Croatia', '0997474736');
  }

  setUser(user: User): void{
    this.user = user;
  }
  getUser(): User{
    return this.user;
  }
}
