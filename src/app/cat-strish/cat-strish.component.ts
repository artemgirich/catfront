import { Component } from '@angular/core';
import { catStrishka } from './cat-strish.component.data';

@Component({
  selector: 'app-cat-strish',
  standalone: true,
  imports: [],
  templateUrl: './cat-strish.component.html',
  styleUrl: './cat-strish.component.css'
})
export class CatStrishComponent {
  cstr = catStrishka
}
