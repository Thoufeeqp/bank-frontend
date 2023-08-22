import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

   }
   isloggedin(){
    return !!localStorage.getItem("token")
   }
}
