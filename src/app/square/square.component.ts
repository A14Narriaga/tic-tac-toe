import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})

export class SquareComponent {
  constructor() {
    this.value = "X"
  }
  @Input() value: 'X' | 'O';
}
