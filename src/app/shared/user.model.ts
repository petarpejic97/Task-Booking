export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public address: string;
    public zipCode: string;
    public country: string;
    public mobilePhone: string;

    constructor(firstName: string,
                lastName: string,
                email: string,
                address: string,
                zipCode: string,
                country: string,
                mobilePhone: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.zipCode = zipCode;
        this.country = country;
        this.mobilePhone = mobilePhone;
    }
}
