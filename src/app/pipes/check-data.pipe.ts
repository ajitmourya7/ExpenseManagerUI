import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkData'
})
export class CheckDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value;
    } else {
      return 'N/A';
    }
  }

}
