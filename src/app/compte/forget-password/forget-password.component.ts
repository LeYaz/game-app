import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConnectionCompteService } from '../connection-compte/connection-compte.service';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  form: FormGroup;
  passwordForm:FormGroup;
  code:string = "";
  showEmail:boolean =true;
  emailSubmit:boolean = false;
  emailsend:boolean = false;
  constructor(private fb: FormBuilder, private connectionService:ConnectionCompteService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    if(this.route.snapshot.queryParamMap.get("code")){
      this.code = this.route.snapshot.queryParamMap.get("code");
      this.showEmail=false;
    }
    this.form = this.fb.group({
      email : [null, Validators.compose([Validators.required, Validators.email])]
    });
    this.passwordForm = this.fb.group({
      password : [null, Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/\d/, { hasNumber: true}),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true}),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true}),
        Validators.minLength(8)
      ])],
      confirmPassword: [null, Validators.required]
    },{
      validator:CustomValidators.passwordMatchValidator
    })
    
  }

  submit(){
       this.connectionService.forgetPassword(this.form.value.email).subscribe(res =>{
      console.log(res);
      if(res.ok = true){
        this.emailsend =true;
        this.emailSubmit = true;
      }
      
      
    }, err=>{
      console.log(err);
      this.emailsend =false;
       this.emailSubmit = true;
      
    })

    
    console.log("a la fin du submit : " + this.emailsend)
  }

  submitPassword(){
    this.connectionService.resetPassword(this.code, this.passwordForm.value.password, this.passwordForm.value.confirmPassword).subscribe(res=>{
      console.log(res);
    }, err =>{
      console.log(err);
    })
  }

}
