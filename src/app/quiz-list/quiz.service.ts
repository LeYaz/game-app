import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Question } from '../jeu-album/question-model';
import { Quiz } from './quiz/quiz-model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private url:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getQuiz(){
    return this.http.get(this.url + 'quizzes')  
  }

  getQuizByUser(id:number){
    return this.http.get(this.url + 'quizzes?users_permissions_user='+id)  
  }

  addQuiz(quiz:Quiz){
    return this.http.post<any>(this.url+'quizzes', {
        nom : quiz.nom,
        Description: quiz.description,
        typejeu : quiz.typejeu,
        categorie : quiz.categorie,
        souscategorie: quiz.souscategorie,
        users_permissions_user : quiz.user, 
        compteur : quiz.compteur,
        nbrquestions : quiz.nbrquestions,
        published_at : null   
      
    }, 
    // {    
    //   headers : new HttpHeaders( {
    //     'Content-Type':  'application/json',
    //     Autorization: `Bearer ${sessionStorage.getItem("jwt")}`
    //   }) 
    // }
    
    );
  }

  getQuestion(){
    return this.http.get(this.url + 'questions')
  }

  getQuestionByQuiz(quizId:number){
    return this.http.get(this.url + 'quiz.id=' + quizId);
  }

  addQuestion(question:Question){
    return this.http.post<any>(this.url + 'questions', {
      question: question.question,
      option:{options: question.option},
      valide : question.valide,
      quiz:question.quiz,
      image : question.image
    },
  //   {
  //     headers:new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       Autorization: `Bearer ${sessionStorage.getItem("jwt")}`
  //     })
  //   }
    )
  }

  updateCompteur(quiz:Quiz){
    quiz.compteur++;
    return this.http.put(this.url + 'quizzes/'+ quiz.id, {
      nom : quiz.nom,
      Description: quiz.description,
      typejeu : quiz.typejeu,
      categorie : quiz.categorie,
      souscategorie: quiz.souscategorie,
      users_permissions_user : quiz.user,
      compteur : quiz.compteur,
      nbrquestions : quiz.nbrquestions  
    })
  }


  getLatestQuiz(){
    return this.http.get(this.url + 'quizzes?_sort=id:DESC&_start=0&_limit=3');
  }

  getMostPlayedQuiz(){
    return this.http.get(this.url + 'quizzes?_sort=compteur:DESC&_start=0&_limit=3');
  }
}
