import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
   baseurl='https://bank-backend-dzwa.onrender.com'
  constructor(private http:HttpClient) { }

  register(username:any,acno:any,password:any){
  
   const body={
    username,
    acno,
    password
   }
   return this.http.post(`${this.baseurl}/employee/register`,body)

  }
  login(acno:any,password:any){
    const body={
      acno,
      password
    }
   return this.http.post(`${this.baseurl}/employee/login`,body)
  }
  getbalance(acno:any){

   return this.http.get(`${this.baseurl}/user/balance/${acno}`,this.apendtoken())
  }

  apendtoken(){
    const token=localStorage.getItem("token")
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append("token",token)
      options.headers=headers
    }
    return options
  }
  fundtransfer(creditacno:any,creditamount:any,password:any){
    const body={
      creditacno,
      creditamount,
      password
    }
    return this.http.post(`${this.baseurl}/user/transfer`,body,this.apendtoken())
  }
  getstatement(){
    
    return this.http.get(`${this.baseurl}/user/statement`,this.apendtoken())
  }
  delete(){
   return this.http.delete(`${this.baseurl}/user/delete`,this.apendtoken())
  }
}

