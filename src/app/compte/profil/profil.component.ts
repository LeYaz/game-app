import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/categorie/categorie-model';
import { QuizService } from 'src/app/quiz-list/quiz.service';
import { Quiz } from 'src/app/quiz-list/quiz/quiz-model';
import { SousCategorie } from 'src/app/souscategorie/soucategorie-model';
import { TypeJeu } from 'src/app/type-jeu/type-jeu-model';
import { User } from '../user-model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private quizService:QuizService) { }

  user:User;
  quizList: Quiz[] = new Array();

  ngOnInit(): void {
    let username = sessionStorage.getItem("username");
    let userid = parseInt(sessionStorage.getItem("id"));
    let useremail = sessionStorage.getItem('email');

    this.user = new User(username, useremail, "");
    this.user.id = userid;

    let list;
    this.quizService.getQuizByUser(userid).subscribe(res=>{
      list=res;
      list.forEach(e => {
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

      });
    })
  }

}
