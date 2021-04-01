import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Connection } from '../connection-model';
import { DataSharingService } from '../data-sharing.service';
import { ConnectionCompteService } from './connection-compte.service';

@Component({
  selector: 'app-connection-compte',
  templateUrl: './connection-compte.component.html',
  styleUrls: ['./connection-compte.component.css']
})
export class ConnectionCompteComponent implements OnInit {
  connectForm:FormGroup;
  constructor(private fb:FormBuilder, private connectionCompteService:ConnectionCompteService, private dataSharingService:DataSharingService) { }

  connectionerror:boolean = false;
  @Output() connected = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.connectForm = this.fb.group({
      identifier:[null, Validators.required],
      password: [null, Validators.required]
    })

  }

  submit(){
    let connection:Connection = new Connection(this.connectForm.value.identifier, this.connectForm.value.password);
    this.connectionCompteService.connect(connection).subscribe(res =>{
      console.log(res);
      sessionStorage.setItem('jwt',res.jwt);
      sessionStorage.setItem('username', res.user.username);
      sessionStorage.setItem('email', res.user.email);
      sessionStorage.setItem('id', res.user.id);
      this.connected.emit(true);
      this.dataSharingService.isUserLoggedIn.next(true);
    },
    err => {
      console.log(err);
      this.connectionerror = true;
    
    })
  }

}
