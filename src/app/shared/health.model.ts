export class Health {
    public icon: string;
    public title: string;
    public description: string[];

    constructor(icon: string,
                title: string,
                description: string[]){
        this.icon = icon;
        this.title = title;
        this.description = description;
    }
}
