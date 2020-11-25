import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SousCategorie } from './soucategorie-model';
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SouscategorieService {

  private url:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getSousCategoriebyCategorie(catid:number){
    return this.http.get(this.url+'souscategories?categorie.id='+catid);
  }

  getSousCategorie(){
    return this.http.get(this.url+'souscategories');
  }

  addSousCagetoire(souscategorie:SousCategorie):Observable<SousCategorie>{
    return this.http.post<SousCategorie>(this.url+'souscategories', souscategorie);
  }
}
