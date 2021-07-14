import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DestinationContainer } from 'src/app/shared/destinationContainer.model';

@Component({
  selector: 'app-destination-container',
  templateUrl: './destination-container.component.html',
  styleUrls: ['./destination-container.component.css']
})
export class DestinationContainerComponent implements OnInit {
  @Input() destinationContainer: DestinationContainer;
  constructor() { }

  ngOnInit(): void {
  }

}
