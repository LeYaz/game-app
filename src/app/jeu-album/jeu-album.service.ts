import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeuAlbumService {

  private url:string = 'http://localhost:1337/jeus';

  constructor(private http:HttpClient) { }

  getJeuAlbum(id:number){
    return this.http.get(this.url+'?souscategorie.id='+id);
  }
}
