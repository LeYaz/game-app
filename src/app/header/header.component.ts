import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../compte/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.isUserLoggedIn.subscribe(value =>{
      this.connected= value;
      if(this.connected){
        this.username= sessionStorage.getItem("username");
      }else{
        this.username = "Mon compte";
      }
    })
   }
  
  username:string = "Mon compte";
  connected:boolean;

  ngOnInit(): void {
      
  }


  Deconnexion(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("id");
    this.dataSharingService.isUserLoggedIn.next(false);
  }
}
