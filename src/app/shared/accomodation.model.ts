import { Stay } from './stay.model';

export class Accomodation {
    public id: number;
    public title: string;
    public photos: string[];
    public city: string;
    public address: string;
    public rate: number;
    public pricePerDay: number;
    public cleanliness: number;
    public distanceToCenter: string;
    public numOfStars: number;
    public roomsNum: number;
    public adultsNum: number;
    public childrenNum: number;
    public stays: Stay[];

    constructor(title: string,
                photos: string[],
                city: string,
                address: string,
                rate: number,
                pricePerDay: number,
                cleanliness: number,
                distanceToCenter: string,
                numOfStars: number,
                roomsNum: number,
                adultsNum: number,
                childrenNum: number,
                stays: Stay[]){
        this.title = title;
        this.photos = photos;
        this.city = city;
        this.address = address;
        this.rate = rate;
        this.pricePerDay = pricePerDay;
        this.cleanliness = cleanliness;
        this.distanceToCenter = distanceToCenter;
        this.numOfStars = numOfStars;
        this.roomsNum = roomsNum;
        this.adultsNum = adultsNum;
        this.childrenNum = childrenNum;
        this.stays = stays;
    }
}
