import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from './categorie-model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private url:string = 'http://localhost:1337/';
  

  constructor(private http:HttpClient) { }

  getCategorie(){
    return this.http.get(this.url+'categories');
  }

  getSousCategorie(cat:Categorie){
    return this.http.get(this.url+'souscategories?categorie.id='+cat.id);
  }
}
