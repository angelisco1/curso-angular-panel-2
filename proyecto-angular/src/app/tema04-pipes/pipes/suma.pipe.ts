import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suma'
})
export class SumaPipe implements PipeTransform {

  transform(value: number, num: number): number {
    return value + num;
  }

}
