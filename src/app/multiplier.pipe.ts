import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

  transform(value: number, multiply: string): any {
    const mult = parseFloat(multiply)
    return value * mult;
  }

}
