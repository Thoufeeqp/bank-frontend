import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  title = 'bank-front';
  iscollapse:boolean=true
  
  collapse(){
    this.iscollapse=!this.iscollapse
    
  }
}
