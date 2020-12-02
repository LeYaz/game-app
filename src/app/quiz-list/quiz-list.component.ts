import { Component, OnInit } from '@angular/core';
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

  constructor(private quizService:QuizService) { }

  quizList: Quiz[] = new Array();

  ngOnInit(): void {
    let list;

    this.quizService.getQuiz().subscribe(res =>{
      list =res;
      console.log(res);
      list.forEach(e=>{
        const id = e.id;
        const nom = e.nom;
        const description = e.Description;
        const typejeu:TypeJeu = e.typejeu;
        const categorie:Categorie = e.categorie;
        const souscategorie:SousCategorie = e.souscategorie;
        const user:User = e.users_permissions_user;
        console.log(user);
        const quiz = new Quiz(id, nom, description, typejeu, categorie, souscategorie, user);
        this.quizList.push(quiz);
      })
    },
    err =>{
      console.log(err);
    })

  }

}
