import { Component } from '@angular/core';
import { catPrimet } from './cat-prim.component.data';

@Component({
  selector: 'app-cat-prim',
  standalone: true,
  imports: [],
  templateUrl: './cat-prim.component.html',
  styleUrl: './cat-prim.component.css'
})
export class CatPrimComponent {
  cp = catPrimet
}
