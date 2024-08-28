import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  

  setLike(anec:string,otsenka:string){
    anec=otsenka
  }
  getLike(){
    this.setLike("1","2")
    
  }
  getTotalLikes(){
    this.getLike()
  }


}
