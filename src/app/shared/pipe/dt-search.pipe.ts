import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dtSearch'
})
export class DtSearchPipe implements PipeTransform {

  transform(value: any, globalarray: any, search?: any): any {

    if (!search) {
      return value;
    }
    value = globalarray;
    return value.filter(function (value) {
      return (
        Object.keys(value).some(k => value[k] != null &&
          value[k].toString().toLowerCase()
            .includes(search.toString().toLowerCase())))
    });
  }


}
