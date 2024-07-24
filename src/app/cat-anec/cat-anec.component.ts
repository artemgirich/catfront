import { Component } from '@angular/core';
import { catAnecdot } from './cat-anec.component.data';
import { AnecfiltrPipe } from '../pipes/anecfiltr.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cat-anec',
  standalone: true,
  imports: [AnecfiltrPipe, FormsModule],
  templateUrl: './cat-anec.component.html',
  styleUrl: './cat-anec.component.css'
})
export class CatAnecComponent {
  ca = catAnecdot
  filtrText : string = ""
}
