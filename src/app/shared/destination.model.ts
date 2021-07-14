export class Destination {
    public photo: string;
    public city: string;
    public region: string;
    public state: string;
    public properties: number;
    public price: number ;

    constructor(photo: string, city: string, region: string, state: string, properties: number, price: number){
        this.photo = photo;
        this.city = city;
        this.region = region;
        this.state = state;
        this.properties = properties;
        this.price = price;
    }
}
