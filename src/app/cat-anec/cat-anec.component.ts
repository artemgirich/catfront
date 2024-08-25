import { Component } from '@angular/core';
import { catAnecdot } from './cat-anec.component.data';
import { AnecfiltrPipe } from '../pipes/anecfiltr.pipe';
import { FormsModule } from '@angular/forms';
import { TagfiltrPipe } from '../pipes/tagfiltr.pipe';
import { LikesService } from '../services/likes.service';
@Component({
  selector: 'app-cat-anec',
  standalone: true,
  imports: [AnecfiltrPipe, FormsModule,TagfiltrPipe],
  templateUrl: './cat-anec.component.html',
  styleUrl: './cat-anec.component.css'
})
export class CatAnecComponent {
  curTag = ""
  ca = catAnecdot
  filtrText = ""
  poiskBut = true

  constructor(private likesService: LikesService) {}

  tagClick ($event : MouseEvent):void {
    this.poiskBut = true
    const vibTag = ($event.target as HTMLElement).innerText || ""
    if (this.curTag == vibTag){
      this.curTag = ""
    } else {
      this.curTag = vibTag
    }
  }
  tagKeyPress ($event :KeyboardEvent){
    if ($event.key===" "){
      const vibTag = ($event.target as HTMLElement).innerText || ""
      if (this.curTag === vibTag){
        this.curTag = ""
      } else {
        this.curTag = vibTag
      }
      this.poiskBut = true
    }
  }
  ubrTag ():void {
    this.curTag = ""
  }
  pb ():void {
    this.poiskBut = !this.poiskBut
  }
  getLike():void {this.likesService.getLike()}
  setLike(anec:string,otsenka:string):void {this.likesService.setLike(anec,otsenka)}

}
