import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect-with-facebook',
  templateUrl: './connect-with-facebook.component.html',
  styleUrls: ['./connect-with-facebook.component.css']
})
export class ConnectWithFacebookComponent implements OnInit {

  email = 'petar.pejic@outlook.com';
  password = '';
  constructor() { }

  ngOnInit(): void {

  }

}
