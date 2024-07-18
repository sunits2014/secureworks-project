import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRow'
})
export class FilterRowPipe implements PipeTransform {

  transform(value: any, args: string): any {
    const originalArgs = [...value];
    if (!args) {
      return originalArgs;
    }
    return value.filter(item => { return item.name.includes(args) })
  }

}
