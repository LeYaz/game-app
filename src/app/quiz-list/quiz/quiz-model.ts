import { Categorie } from 'src/app/categorie/categorie-model';
import { User } from 'src/app/compte/user-model';
import { SousCategorie } from 'src/app/souscategorie/soucategorie-model';
import { TypeJeu } from 'src/app/type-jeu/type-jeu-model';
import { TypeJeuService } from 'src/app/type-jeu/type-jeu.service';

export class Quiz{
    id:number;
    nom:string;
    description:string;
    typejeu:TypeJeu;
    categorie:Categorie;
    souscategorie:SousCategorie;
    user:User;

    constructor(id:number, nom:string, description:string, typejeu:TypeJeu, categorie:Categorie, souscategorie:SousCategorie, user:User){
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.typejeu = typejeu;
        this.categorie = categorie;
        this.souscategorie = souscategorie;
        this.user = user;
    }
}