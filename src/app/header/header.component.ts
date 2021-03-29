import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
   username:string = "Mon compte";
  ngOnInit(): void {
    if(sessionStorage.getItem("username")!=null){
       this.username= sessionStorage.getItem("username");
    }
  }

}
