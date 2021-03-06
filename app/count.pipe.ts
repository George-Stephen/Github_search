import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

    transform(value: any): number {
      const secondsInDay = 86400;
      let today:Date = new Date();
      let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      var dateDifference = Math.abs(todayWithNoTime - value);
      var dateDifferenceSeconds = dateDifference * 0.001;
      var dateCounter = dateDifferenceSeconds/secondsInDay;
      return dateCounter;
 
    
  }

}
