import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import jspdf from 'jspdf'
import 'jspdf-autotable'
import { transition } from '@angular/animations';
@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.css']
})
export class MinistatementComponent implements OnInit {
  statement:any=[]
  userinput:string=''
  constructor(private api:ApiService  ){

  }
  ngOnInit(): void {
    this.api.getstatement().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.statement=res
        
      }
      ,
      error:(err:any)=>{
        console.log(err);
        
      }
      
      
    })
  }

  generatepdf(){
    let pdf =new jspdf()
    let titlerow=['type','from','to','amount']
    let body:any=[]
    pdf.setFontSize(16)
    pdf.text("All Transactions",10,10)
    pdf.setFontSize(12)
    for (let element of this.statement){
      var temp=[element.type,element.from,element.to,element.debitamount]
      body.push(temp)
    }
    (pdf as any).autoTable(titlerow,body)
    pdf.output('dataurlnewwindow')
    pdf.save('statement.pdf')

  }

}
