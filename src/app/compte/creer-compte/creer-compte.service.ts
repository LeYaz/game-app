import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user-model';

@Injectable({
  providedIn: 'root'
})
export class CreerCompteService {

  private url:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  addUser(user:User){
    return this.http.post(this.url+'users', user);
  }

  registerUser(user:User){
    return this.http.post<any>(this.url+'auth/local/register', {
      username: user.username,
      email : user.email,
      password : user.password
    })
  }
}
