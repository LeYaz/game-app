import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../categorie/categorie-model';
import { User } from '../compte/user-model';
import { QuizService } from '../quiz-list/quiz.service';
import { Quiz } from '../quiz-list/quiz/quiz-model';
import { SousCategorie } from '../souscategorie/soucategorie-model';
import { TypeJeu } from '../type-jeu/type-jeu-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private quizService:QuizService, private router:Router, private route:ActivatedRoute) { }
  
  quizRecents: Quiz[] = new Array();
  quizPopulaires: Quiz[] = new Array();

  ngOnInit(): void {
    let listrecents;
    let listpopulaires;
    
    this.quizService.getLatestQuiz().subscribe(res=>{
      listrecents = res;
      listrecents.forEach(e => {
        const id = e.id;
        const nom = e.nom;
        const description = e.Description;
        const typejeu:TypeJeu = e.typejeu;
        const categorie:Categorie = e.categorie;
        const souscategorie:SousCategorie = e.souscategorie;
        const user:User = e.users_permissions_user;
        const compteur = e.compteur;
        const nbrquestions = e.nbrquestions;
        const quiz = new Quiz(id, nom, description, typejeu, categorie, souscategorie, user, compteur, nbrquestions);
        this.quizRecents.push(quiz);
      });
    })

    this.quizService.getMostPlayedQuiz().subscribe(res=>{
      listpopulaires = res;
      listpopulaires.forEach(e => {
        const id = e.id;
        const nom = e.nom;
        const description = e.Description;
        const typejeu:TypeJeu = e.typejeu;
        const categorie:Categorie = e.categorie;
        const souscategorie:SousCategorie = e.souscategorie;
        const user:User = e.users_permissions_user;
        const compteur = e.compteur;
        const nbrquestions = e.nbrquestions;
        const quiz = new Quiz(id, nom, description, typejeu, categorie, souscategorie, user, compteur, nbrquestions);
        this.quizPopulaires.push(quiz);
      });

    })

  }

  choixQuiz(quiz:Quiz){
    this.router.navigate(['/jeuAlbum', quiz.id], {relativeTo: this.route})
  }

}
