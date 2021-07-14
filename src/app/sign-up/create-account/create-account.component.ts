import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit, AfterViewInit {

  hide = true;
  constructor() { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
