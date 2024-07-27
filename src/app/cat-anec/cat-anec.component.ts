import { Component } from '@angular/core';
import { catAnecdot } from './cat-anec.component.data';
import { AnecfiltrPipe } from '../pipes/anecfiltr.pipe';
import { FormsModule } from '@angular/forms';
import { TagfiltrPipe } from '../pipes/tagfiltr.pipe';
@Component({
  selector: 'app-cat-anec',
  standalone: true,
  imports: [AnecfiltrPipe, FormsModule,TagfiltrPipe],
  templateUrl: './cat-anec.component.html',
  styleUrl: './cat-anec.component.css'
})
export class CatAnecComponent {
  curTag : string = ""
  ca = catAnecdot
  filtrText : string = ""
  tagClick ($event : MouseEvent):void {
    this.curTag = ($event.target as HTMLElement).innerText || ""
  }
  ubrTag ($event : MouseEvent):void {
    this.curTag = ""
  }
}
