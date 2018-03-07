import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dtSort'
})

export class DtSortPipe implements PipeTransform {

  transform(value: any, globalarray: any, args?: any): any {

    if (value != undefined) {
      value = globalarray;
      return value.sort(function (a, b) {
        
        if (a[args.property] < b[args.property]) {
         
          return -1 * args.direction;
        }
        else if (a[args.property] > b[args.property]) {
        
          return 1 * args.direction;
        }
        else {
          return 0;
        }
      });
    };
  }
}


