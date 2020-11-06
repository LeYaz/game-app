import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SousCategorie } from './soucategorie-model';


@Injectable({
  providedIn: 'root'
})
export class SouscategorieService {

  private url:string = 'http://localhost:1337/';

  constructor(private http:HttpClient) { }

  getSousCategorie(catid:number){
    return this.http.get(this.url+'souscategories?categorie.id='+catid);
  }
}
