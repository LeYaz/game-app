import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Connection } from '../connection-model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionCompteService {

  private url = environment.baseUrl;

  constructor( private http: HttpClient) { }

  connect(co:Connection){
    return this.http.post<any>(this.url+'auth/local', {
      identifier: co.identifier,
      password: co.password,
    })
  }

  loggedIn(){
    return !!sessionStorage.getItem('jwt');
  }

  forgetPassword(email:string){
    return this.http.post<any>(this.url+'auth/forgot-password', {
      email: email
    })
  }


  resetPassword(code:string, password:string, confirmationpassword:string){
    return this.http.post<any>(this.url+'auth/reset-password',{
      code: code,
      password : password,
      passwordConfirmation : confirmationpassword
    })
  }
}
