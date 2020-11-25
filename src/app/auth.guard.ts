import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectionCompteService } from './compte/connection-compte/connection-compte.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private connectionService: ConnectionCompteService, private router:Router){}
  
  canActivate():boolean {
    if(this.connectionService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/compte']);
      return false;
    }
  }
  
}
