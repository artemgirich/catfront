import { Pipe, PipeTransform } from '@angular/core';
import { CatAnec, catAnecdot } from '../cat-anec/cat-anec.component.data';

@Pipe({
  name: 'tagfiltr',
  standalone: true
})
export class TagfiltrPipe implements PipeTransform {

  transform(value: Array<CatAnec>,  tag:string): Array<CatAnec> {
    return value.filter((huy)=>{
      return huy.tags.join(" ").includes(tag)
    })
  }  
    
}
  

