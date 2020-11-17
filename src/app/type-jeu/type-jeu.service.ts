import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeJeuService {

  private url:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getTypeJeu(){
    return this.http.get(this.url+'typejeus');
  }
}
