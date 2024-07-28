import { Pipe, PipeTransform } from '@angular/core';
import { CatAnec } from '../cat-anec/cat-anec.component.data';

@Pipe({
  name: 'tagfiltr',
  standalone: true
})
export class TagfiltrPipe implements PipeTransform {

  transform(value: CatAnec[],  tag:string): CatAnec[] {
    return value.filter((huy)=>{
      return huy.tags.join(" ").includes(tag)
    })
  }  
    
}
  

