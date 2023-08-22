import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isloading:boolean=false

  loginform=this.fb.group({

    acno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(4)]]
  })
  login(){
    if(   this.loginform.valid)
      {
       
       let acno=this.loginform.value.acno
       let password=this.loginform.value.password
       this.isloading=true
       this.api.login(acno,password).subscribe({
        next:(response:any)=>{
          const{preuser,token}=response
          localStorage.setItem("username",preuser.username)
          localStorage.setItem("acno",preuser.acno)
          localStorage.setItem("token",token)
          console.log(response);
          setTimeout(()=>{
            this.isloading=false
            this.navigate.navigateByUrl('servicebank/dashboard')

          },1000)
        },
        error:(err:any)=>{
            console.log(err.error);
            this.isloading=false
            setTimeout(()=>{
              
              alert('invalid acno or password')
            },500)
           
            
        }
        
       })
      } else{
        alert('invalid form')
      } }
  

  constructor(private fb:FormBuilder,private api:ApiService,private navigate:Router){

  }

}
