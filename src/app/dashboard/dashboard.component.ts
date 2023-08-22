import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  
  user:any=''
  acno:any=''
  balance:number=0
  showoffcanvas:boolean=true
  transferform=this.fb.group({
    creditacno:[""],
    creditamount:[""],
    password:[""]
  })
  constructor(private api:ApiService,private fb:FormBuilder,private route:Router){

  }
  ngOnInit(): void {
  this.user= localStorage.getItem("username")
  this.acno=localStorage.getItem("acno")
  }
  iscollapse:boolean=true
 
  collapse(){
    this.iscollapse=!this.iscollapse
    
  }
  getbalance(){
    this.api.getbalance(this.acno).subscribe({
      next:(res:any)=>{
        this.balance=res
      }
      ,
      error:(err:any)=>{
         this.showoffcanvas=false
      }
    })
  }
  transfer(){
    
    if(this.transferform.valid){
     let creditacno=this.transferform.value.creditacno
     let creditamount=this.transferform.value.creditamount
     let password=this.transferform.value.password
     this.api.fundtransfer(creditacno,creditamount,password).subscribe({
      next:(res:any)=>{
       
       
       
          alert("Fund transferred successfully")
         
        
      },
      error:(err:any)=>{
       alert(err.error)
      }
     })
     
    }
    else{
      alert("invalid")
    }
  }
  deleteaccount(){
    this.api.delete().subscribe({
      next:(res:any)=>{
        console.log(res);
        localStorage.removeItem("username")
        localStorage.removeItem("acno")
        localStorage.removeItem("token")
        alert(res)
        
          this.route.navigateByUrl('')

        
        
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("acno")
    localStorage.removeItem("token")
    
    
      this.route.navigateByUrl('servicebank/login')

  }
  

  
   
}
//statement

