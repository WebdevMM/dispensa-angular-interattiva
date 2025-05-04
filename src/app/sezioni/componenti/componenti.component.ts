import { Component } from '@angular/core';

@Component({
  selector: 'app-componenti',
  standalone: true,
  imports: [],
  templateUrl: './componenti.component.html',
  styleUrls: ['./componenti.component.css']
})
export class ComponentiComponent {
  nomeComponente: string = 'ComponentiComponent';
  messaggio: string = 'Benvenuto nel mondo dei componenti!';
  count: number = 0;

  incrementa() {
    this.count++;
  }

  resetta() {
    this.count = 0;
  }
}
