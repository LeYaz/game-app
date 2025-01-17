import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from './categorie-model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private url:string = environment.baseUrl;
  

  constructor(private http:HttpClient) { }

  getCategorie(){
    return this.http.get(this.url+'categories');
  }

  addCategorie(cat:Categorie ):Observable<Categorie>{
    return this.http.post<Categorie>(this.url+'categories',cat);
  }

}
