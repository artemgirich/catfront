import { Component } from '@angular/core';

@Component({
  selector: 'app-cat-anec',
  standalone: true,
  imports: [],
  templateUrl: './cat-anec.component.html',
  styleUrl: './cat-anec.component.css'
})
export class CatAnecComponent {
  static linkName : string = "анекдоты про котов"
}
