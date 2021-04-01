import { Component, OnInit, Renderer2 } from '@angular/core';

import { JeuAlbumService} from './jeu-album.service';
import { JeuAlbum } from './jeu-album-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from './question-model';
import { Image } from '../create-jeu/image-model';
import { Quiz } from '../quiz-list/quiz/quiz-model';
import { QuizService } from '../quiz-list/quiz.service';

@Component({
  selector: 'app-jeu-album',
  templateUrl: './jeu-album.component.html',
  styleUrls: ['./jeu-album.component.css']
})
export class JeuAlbumComponent implements OnInit {

  constructor(private jeuAlbumService: JeuAlbumService,private router:Router, private route:ActivatedRoute, private quizService: QuizService) { }
  // jeux: JeuAlbum[] = new Array();
  questions: Question[] = new Array();
  showreponse:boolean = false;
  bonnereponse:boolean= false;
  finjeu:boolean= false;
  questionnumber:number = 0;
  totalquestion:number;
  
  point:number=0;
  stateOfButton: boolean[];
  q: Question = new Question(0,"question", ["a", "b", "c", "d"], null, "a", null);
  // j: JeuAlbum = new JeuAlbum(0, "question", ["a", "b", "c", "d"], "a", "...");

   ngOnInit() {
     let list;
     let catid = parseInt(this.route.snapshot.paramMap.get('id'));
    //  this.jeuAlbumService.getJeuAlbum(catid).subscribe(ja =>{
    //    list =ja;
    //    list.forEach(e =>{
    //      const id = e.id;
    //      const question = e.Question;
    //      const option =  e.Reponse.reponse;
    //      const valide = e.Reponse.valide;
    //      const image = "http://localhost:1337"+ e.image.formats.thumbnail.url;
    //      const jeualbum = new JeuAlbum(id, question, option, valide, image);
    //      this.jeux.push(jeualbum);
    //    })
    //    this.j= new JeuAlbum(this.jeux[0].id, this.jeux[0].question, this.jeux[0].option, this.jeux[0].valide, this.jeux[0].image);
    //    this.totalquestion = list.length;
       
    //  })

     this.jeuAlbumService.getQuizQuestions(catid).subscribe(quest =>{
       list=quest;
       list.forEach(e => {
         const id= e.id;
         const question = e.question;
         const option = e.option.options;
         const valide = e.valide;
         const imgurl =  e.image.formats.thumbnail.url;
         const image = new Image(e.image.id, e.image.name, imgurl);
         const quiz = new Quiz(e.quiz.id, e.quiz.nom, e.quiz.Description, e.quiz.typejeu, e.quiz.categorie, e.quiz.souscategorie, e.quiz.users_permissions_user, e.quiz.compteur, e.quiz.nbrquestions);
         const newquestion = new Question(id, question,option,image, valide, quiz );
        this.questions.push(newquestion);
       });
       this.q = new Question(this.questions[0].id, this.questions[0].question, this.questions[0].option,this.questions[0].image, this.questions[0].valide, this.questions[0].quiz);
       this.totalquestion = list.length;
     })
     this.stateOfButton = Array(this.questions.length).fill(false);
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
      this.quizService.updateCompteur(this.questions[0].quiz).subscribe(res=>{
        // console.log(res);
      })
    }
}

/**
 * Affiche la question suivante lorsque l'utilisateur clique sur le bouton question suivante
 */
clickSuivant(){
  this.stateOfButton = Array(this.questions.length).fill(false);
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
  this.stateOfButton = Array(this.questions.length).fill(false);
}

/**
 * Change les valeur des valeur de j pour afficher la question suivante
 */
changeQuestion(){
  this.q.id= this.questions[this.questionnumber].id;
  this.q.question= this.questions[this.questionnumber].question;
  this.q.option= this.questions[this.questionnumber].option;
  this.q.valide= this.questions[this.questionnumber].valide;
  this.q.image= this.questions[this.questionnumber].image;
}

changeState(i:number){
  this.stateOfButton[i] = !this.stateOfButton[i];
}


}
