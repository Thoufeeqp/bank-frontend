import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(transactionarray:any[],userinput:string,property:string): any[] {
    const result:any=[]
    if(!transactionarray || userinput=="" || property==""){
      return transactionarray
    }
    transactionarray.forEach((item:any)=>{
      if(      item[property.trim().toLowerCase()].includes(userinput.trim().toLowerCase())
      ){
    result.push(item)}
    })
    return result;
  }

}
