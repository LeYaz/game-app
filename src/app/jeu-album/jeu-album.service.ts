import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JeuAlbumService {

  private url:string = environment.baseUrl+'jeus';

  constructor(private http:HttpClient) { }

  getJeuAlbum(id:number){
    return this.http.get(this.url+'?souscategorie.id='+id);
  }

  getQuizQuestions(id:number){
    return this.http.get( environment.baseUrl +'questions?quiz.id='+id);
  }
}
