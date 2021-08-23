import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return  moment.utc(value).local().format('DD/MM/YYYY');
    } else {
      return 'N/A';
    }
  }

}
