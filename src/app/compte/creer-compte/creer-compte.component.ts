import { Component, OnInit } from '@angular/core';
import { User } from '../user-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { CreerCompteService } from './creer-compte.service';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent implements OnInit {

  userForm:FormGroup;

  constructor(private fb:FormBuilder, private creerCompteService:CreerCompteService) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)]) ],
      email:[null,Validators.compose([Validators.required, Validators.email])],
      password : [null, Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/\d/, { hasNumber: true}),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true}),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true}),
        Validators.minLength(8)
      ])],
      confirmPassword: [null, Validators.required]
    },{
      validator: CustomValidators.passwordMatchValidator
    });
  }

  submit(){
    console.log(this.userForm);
    let user:User = new User(this.userForm.value.username, this.userForm.value.email, this.userForm.value.password);
    
    this.creerCompteService.registerUser(user).subscribe(res =>{
      console.log('Register user : ' + JSON.stringify(res));
      const response = res;
      
      console.log('User profile', response.jwt);
    
    })  
  }

}
