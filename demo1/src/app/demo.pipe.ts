import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value + '(demo)';
  }

}
