import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
  <header>
    <div class="verh">  
      <img src="{{'vorovKot.jpg'}}" alt="vorovKot" class="vcot"/>
      <span class="zagolov"><strong>ВОРОВАННЫЕ КОТЫ</strong> </span>
    </div>
  </header>
  <nav>
  @for (ln of links; track ln) {
    @if (ln.data!['caption'] !==""){
    <a
        routerLink={{ln.path}}
        routerLinkActive="active"
        ariaCurrentWhenActive="page"
        >{{ln.data!['caption']}}</a
    >
    }
  }    
    
  </nav>
  <router-outlet />
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    a {
      margin : 10px; padding : 5px;
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
      }
    .zagolov{
      font-size : 40px;
      background-image: url('../../public/meh.jpg');
      background-size: cover;
      background-clip: text;
      color: transparent;
      vertical-align: top;
      font-family: 'Bebas Neue', cursive;
      
    }
    `]
    
})
export class AppComponent {
  
  links = routes
  
}
