import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <header>
    <div class="verh">  
      <img src="{{'vorovKot.jpg'}}" alt="vorovKot" class="vcot"/>
      <span class="zagolov">ворованные коты </span>
    </div>
  </header>
  <nav>
  @for (ln of links; track ln) {
    <a
        routerLink={{ln.link}}
        routerLinkActive="active"
        ariaCurrentWhenActive="page"
        >{{ln.name}}</a
    >
    }
    
  </nav>
  <router-outlet />
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    a { margin : 10px; padding : 5px;
        font-family: 'Bebas Neue', cursive;
  font-size: 1em;
  
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-image: linear-gradient(gold, gold);
  background-size: 100% 10px;
  background-repeat: no-repeat;
  background-position: 100% 0%;
   transition: background-size .7s, background-position .5s ease-in-out;
}
    a:hover {
      background-size: 100% 100%;
      background-position: 0% 100%;
      transition: background-position .7s, background-size .5s ease-in-out;
    }
    .vcot{
      width : 80px; 
      align: left;      
      }
    .verh{
      display : block;
    }
    .zagolov{
      font-size : 30px;
      background-image: url("meh.jpg");
  background-size: cover;
  background-clip: text;
  color: transparent;
      vertical-align: top;
      text-shadow: 1px 1px 2px rgb(179, 147, 211);
    }
    `]
    
})
export class AppComponent {
  title = 'my-app';
  links = [
    {
      link : '/cat-anec',
      name : 'анекдоты про котов'
    },    {
      link : '/cat-items',
      name : 'вещи для котов'
    },    {
      link : '/cat-facts',
      name : 'факты про котов'
    },    {
      link : '/cat-strish',
      name : 'стрижки для котов'
    },    {
      link : '/cat-prim',
      name : 'приметы про котов'
    },    {
      link : '/cat-porod',
      name : 'породы котов'
    },    {
      link : '/cat-klich',
      name : 'клички котов'
    },
  ]
}
