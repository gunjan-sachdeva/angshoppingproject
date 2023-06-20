import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instock'
})
export class InstockPipe implements PipeTransform {

  transform(value: boolean, ...args: boolean[]): string {
    let val = "";
    if(value == true){
      val = "true";
    }
    else{
      val = "false";
    }
    return val;
  }

}
