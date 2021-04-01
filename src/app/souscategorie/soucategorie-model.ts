import { Categorie } from "../categorie/categorie-model";

export class SousCategorie{
    id: number;
    nom : string;
    cat:Categorie;

    constructor(id:number, nom:string, cat:Categorie){
        this.id = id;
        this.nom = nom;
        this.cat = cat;
    }
}