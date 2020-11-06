export class JeuAlbum {
    id :number;
    question : string;
    option : string [];
    valide : string;
    image : string;

    constructor(id:number, question:string, option:string[],valide:string,image:string){
        this.id =id;
        this.question = question;
        this.option = option;
        this.valide = valide;
        this.image = image;
    }

   
}