import { Component, Input, OnInit } from '@angular/core';
import { TemporarilyClosed } from 'src/app/shared/temporarily-closed.model';

@Component({
  selector: 'app-temporarily-closed-item',
  templateUrl: './temporarily-closed-item.component.html',
  styleUrls: ['./temporarily-closed-item.component.css']
})
export class TemporarilyClosedItemComponent implements OnInit {
  @Input() temporarilyClosed: TemporarilyClosed;
  constructor() { }

  ngOnInit(): void {
  }

}
