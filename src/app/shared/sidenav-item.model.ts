export class SidenavItem{
    public icon: string;
    public component: string;
    public class: string;

    constructor(icon: string, component: string, className: string){
        this.icon = icon;
        this.component = component;
        this.class = className;
    }
}
