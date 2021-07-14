export class DestinationAndTravelers {
    public photo: string;
    public city: string;
    public state: string;
    public connectType: string;
    public typeDescription: string;
    public numTravels: number;

    constructor(photo: string,
                city: string,
                state: string,
                connectType: string,
                typeDescription: string,
                numTravels: number){
        this.photo = photo;
        this.city = city;
        this.state = state;
        this.connectType = connectType;
        this.typeDescription = typeDescription;
        this.numTravels = numTravels;
    }
}
