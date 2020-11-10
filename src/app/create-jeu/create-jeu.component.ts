import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categorie } from '../categorie/categorie-model';
import { CategorieService } from '../categorie/categorie.service';
import { JeuAlbum } from '../jeu-album/jeu-album-model';
import { SousCategorie } from '../souscategorie/soucategorie-model';
import { SouscategorieService } from '../souscategorie/souscategorie.service';
import { TypeJeu } from '../type-jeu/type-jeu-model';
import { TypeJeuService } from '../type-jeu/type-jeu.service';

@Component({
  selector: 'app-create-jeu',
  templateUrl: './create-jeu.component.html',
  styleUrls: ['./create-jeu.component.css']
})
export class CreateJeuComponent implements OnInit {
  jeuForm:FormGroup;

  constructor(private fb:FormBuilder, private categorieService: CategorieService, private sousCategorieService: SouscategorieService, private typeJeuService: TypeJeuService) { }

  listJeuAlbum: JeuAlbum [] = new Array();
  categories: Categorie[] = new Array();
  sousCategories: SousCategorie[] = new Array();
  typeJeu: TypeJeu[] = new Array();
  actualcatid:number;
  actualsouscatid:number;
  showcreatejeu:number=0;
  newscat:string;
  

  ngOnInit(): void {
    let catList;
    let typelist;
    this.categorieService.getCategorie().subscribe(cat =>{
      catList = cat;
      catList.forEach(e => {
        const id = e.id;
        const nom = e.nom;
        const categorie = new Categorie(id, nom);
        this.categories.push(categorie);
      })
    })

    this.typeJeuService.getTypeJeu().subscribe(tj =>{
      typelist = tj;
      typelist.forEach(e =>{
        const id = e.id;
        const nom = e.nom;
        const typejeu = new TypeJeu(id, nom);
        this.typeJeu.push(typejeu);
      })
    })
    this.jeuForm = this.fb.group({
      categorie: [null],
      souscategorie:[null],
      typejeu:[null],
      inputcat:[null],
      inputsouscat:[null]
    });
  }

  submit() {
    console.log("Form Submitted")
    console.log(this.jeuForm.value)
    this.showcreatejeu = this.jeuForm.value.typejeu;
    
  }


  /**
   * 
   * @param e element selectionner
   * Affiche les sous categorie suivant la categorie selectionner
   */
  changeCategorie(e){
    console.log(e.target.value);
    let list;
    let tab = e.target.value.split(' ');
    let catid = tab[1];
    if(catid != this.actualcatid){
      this.actualcatid = catid;
      this.sousCategories=[];
      if(catid!=0){
      this.sousCategorieService.getSousCategoriebyCategorie(catid).subscribe(scat =>{
        list = scat;
        list.forEach(e => {
          const id = e.id;
          const nom = e.nom;
          const souscat = new SousCategorie(id, nom, catid);
          this.sousCategories.push(souscat);
        })
      })
      }else{
        // Creer une nouvelle categorie a partir du service

        //Creer sous caatégorie a partir du service

      }
      
    }
    
    
  }

  changeSousCategorie(e){
    let tab = e.target.value.split(' ');
    let scatid = tab[1];
    this.actualsouscatid = scatid;
  }

}
