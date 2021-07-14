import { DestinationAndTravelers } from './destinationAndTravelers.model';

export class DestinationContainer {
    public title: string;
    public subtitle: string;
    public className: string;
    public destinationAndTravelers: DestinationAndTravelers[];

    constructor(title: string,
                subtitle: string,
                className: string,
                destinations: DestinationAndTravelers[]){
        this.title = title;
        this.subtitle = subtitle;
        this.className = className;
        this.destinationAndTravelers = destinations;
    }
}
