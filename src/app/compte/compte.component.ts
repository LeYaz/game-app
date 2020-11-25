import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  possedecompte:boolean=true;
  showProfil: boolean;

  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem("username") && sessionStorage.getItem("jwt") && sessionStorage.getItem("email") ){
      this.showProfil = true;
    }else{
      this.showProfil =false;
    }
  }

  creerCompte(){
    this.possedecompte= !this.possedecompte;

  }

  show(connected:boolean){
    this.showProfil = connected;  
  }
}
