import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';

import { Router } from '@angular/router';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerform=this.fb.group({

    username:['',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z ]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(4)]]
  })
  constructor(private fb:FormBuilder,private api:ApiService,private navigate:Router){

  }
 
  register(){
if(   this.registerform.valid)
  {
   let username=this.registerform.value.username
   let acno=this.registerform.value.acno
   let password=this.registerform.value.password
   this.api.register(username,acno,password).subscribe({
    next:(response:any)=>{
      setTimeout(()=>{
        this.navigate.navigateByUrl('servicebank/login'),2000
      })
     
    },
    error:(err:any)=>{
      console.log(err);
      
    }
   })
  } else{
    alert('invalid form')
  } }
}
