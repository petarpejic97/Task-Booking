import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavItem } from 'src/app/shared/sidenav-item.model';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.css']
})
export class SidenavItemComponent implements OnInit {
  @Input() sidenavitem: SidenavItem;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
