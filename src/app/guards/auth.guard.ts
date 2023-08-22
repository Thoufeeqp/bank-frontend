import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
 const isloggedin=!!localStorage.getItem("token")
 if(isloggedin){
  return true
 }
 else{
  alert("please login")
  return false
 }
  

  
};
