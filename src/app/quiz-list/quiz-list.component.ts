import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../categorie/categorie-model';
import { User } from '../compte/user-model';
import { SousCategorie } from '../souscategorie/soucategorie-model';
import { TypeJeu } from '../type-jeu/type-jeu-model';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz/quiz-model';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  constructor(private quizService:QuizService, private router:Router, private route:ActivatedRoute) { }

  quizList: Quiz[] = new Array();
  public searchText : string="";
  ngOnInit(): void {
    let list;

    this.quizService.getQuiz().subscribe(res =>{
      list =res;
      // console.log(res);
      list.forEach(e=>{
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
        this.quizList.push(quiz);
      })
    },
    err =>{
      console.log(err);
    })

  }

  choixQuiz(quiz:Quiz){
    this.router.navigate(['/jeuAlbum', quiz.id], {relativeTo: this.route})
  }

}
