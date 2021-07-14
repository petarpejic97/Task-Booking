export class Stay {
    public id: number;
    public title: string;
    public kingBed: number;
    public queenBed: number;
    public futonBed: number;
    public size: number;
    public firstStayInfo: string;
    public secondStayInfo: string;
    public thirdStayInfo: string;
    public advantages: string[];
    public tip: string;

    constructor(
                id: number,
                title: string,
                kingBed: number,
                queenBed: number,
                futonBed: number,
                size: number,
                firstStayInfo: string,
                secondStayInfo: string,
                thirdStayInfo: string,
                advantages: string[],
                tip: string
                ){
        this.id = id;
        this.title = title;
        this.kingBed = kingBed;
        this.queenBed = queenBed;
        this.futonBed = futonBed;
        this.size = size;
        this.firstStayInfo = firstStayInfo;
        this.secondStayInfo = secondStayInfo;
        this.thirdStayInfo = thirdStayInfo;
        this.advantages = advantages;
        this.tip = tip;
     }
}