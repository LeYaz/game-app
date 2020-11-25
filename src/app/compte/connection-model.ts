export class Connection{
    identifier:string;
    password:string;

    constructor(identifier:string, password:string){
        this.password=password;
        this.identifier=identifier;
    }
}