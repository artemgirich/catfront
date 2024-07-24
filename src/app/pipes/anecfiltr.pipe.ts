import { Pipe, PipeTransform } from '@angular/core';
import { CatAnec } from '../cat-anec/cat-anec.component.data';

@Pipe({
  name: 'anecfiltr',
  standalone: true
})
export class AnecfiltrPipe implements PipeTransform {

  transform(value: Array<CatAnec>,  filtr:string): Array<CatAnec> {
    return value.filter((huy)=>{
      return huy.anecName.includes(filtr) || huy.text.includes(filtr)
    });
  }
  
}
