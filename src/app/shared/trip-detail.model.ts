export class TripDetail{
    public destination: string;
    public startDate: Date;
    public endDate: Date;
    public roomNumber: number;
    public adultsNumber: number;
    public childrenNumber: number;

    constructor(destination: string,
                startDate: Date,
                endDate: Date,
                roomNumber: number,
                adultsNumber: number,
                childrenNumber: number){
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.roomNumber = roomNumber;
        this.adultsNumber = adultsNumber;
        this.childrenNumber = childrenNumber;
    }
}
