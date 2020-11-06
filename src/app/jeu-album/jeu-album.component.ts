import { Component, OnInit, Renderer2 } from '@angular/core';

import { JeuAlbumService} from './jeu-album.service';
import { JeuAlbum } from './jeu-album-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jeu-album',
  templateUrl: './jeu-album.component.html',
  styleUrls: ['./jeu-album.component.css']
})
export class JeuAlbumComponent implements OnInit {

  constructor(private jeuAlbumService: JeuAlbumService,private router:Router, private route:ActivatedRoute) { }
  jeux: JeuAlbum[] = new Array();
  showreponse:boolean = false;
  bonnereponse:boolean= false;
  finjeu:boolean= false;
  questionnumber:number = 0;
  totalquestion:number;
  
  point:number=0;
  stateOfButton: boolean[];

  j: JeuAlbum = new JeuAlbum(0, "question", ["a", "b", "c", "d"], "a", "...");

   ngOnInit() {
     let list;
     let catid = parseInt(this.route.snapshot.paramMap.get('id'));
     this.jeuAlbumService.getJeuAlbum(catid).subscribe(ja =>{
       list =ja;
       list.forEach(e =>{
         const id = e.id;
         const question = e.Question;
         const option =  e.Reponse.reponse;
         const valide = e.Reponse.valide;
         const image = "http://localhost:1337"+ e.image.formats.thumbnail.url;
         const jeualbum = new JeuAlbum(id, question, option, valide, image);
         this.jeux.push(jeualbum);
       })
       this.j= new JeuAlbum(this.jeux[0].id, this.jeux[0].question, this.jeux[0].option, this.jeux[0].valide, this.jeux[0].image);
       this.totalquestion = list.length;
       
     })
     this.stateOfButton = Array(this.jeux.length).fill(false);
  }

  /**
   * Verifie si l'utilisateur a répondu juste à la question lorsqu'il choisit une reponse
   * 
   * @param rep : reponse de l'utilisateur
   * @param valide : reponse juste
   */
clickReponse(rep:string, valide:string){
    
    if(rep == valide){
      this.bonnereponse = true;
      this.point++;
      
    } else{
      this.bonnereponse = false;
      
    }

    this.showreponse=true;
    this.questionnumber++;
    if(this.totalquestion>this.questionnumber){
      this.finjeu = false;
    }else{
      this.finjeu = true;
    }
}

/**
 * Affiche la question suivante lorsque l'utilisateur clique sur le bouton question suivante
 */
clickSuivant(){
  this.stateOfButton = Array(this.jeux.length).fill(false);
  this.showreponse = false;
  if(this.totalquestion>this.questionnumber){
    this.changeQuestion();
  }else{
    this.finjeu = true;
  } 
}

/**
 * 
 * @param reco : boolean renvoyer par le conposant enfant lorsque l'utilisateur choisi de recommencer la partie
 * 
 */
recommencer(reco:boolean){
  if(reco){
    this.initValeur();
    this.changeQuestion();
  }
  
}

/**
 * Initialise les valeur de la partie
 */
initValeur(){
  this.point=0;
  this.questionnumber = 0;
  this.showreponse = false;
  this.bonnereponse= false;
  this.finjeu= false;
}

/**
 * Change les valeur des valeur de j pour afficher la question suivante
 */
changeQuestion(){
  this.j.id= this.jeux[this.questionnumber].id;
  this.j.question= this.jeux[this.questionnumber].question;
  this.j.option= this.jeux[this.questionnumber].option;
  this.j.valide= this.jeux[this.questionnumber].valide;
  this.j.image= this.jeux[this.questionnumber].image;
}

changeState(i:number){
  this.stateOfButton[i] = !this.stateOfButton[i];
}


}
