import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeJeuService {

  private url:string = 'http://localhost:1337/';

  constructor(private http:HttpClient) { }

  getTypeJeu(){
    return this.http.get(this.url+'typejeus');
  }
}
