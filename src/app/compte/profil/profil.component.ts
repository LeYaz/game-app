import { Component, OnInit } from '@angular/core';
import { User } from '../user-model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  user:User;

  ngOnInit(): void {
    let username = sessionStorage.getItem("username");
    let userid = parseInt(sessionStorage.getItem("id"));
    let useremail = sessionStorage.getItem('email');

    this.user = new User(username, useremail, "");
    this.user.id = userid;
  }

}
