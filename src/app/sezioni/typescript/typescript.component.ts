import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [],
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {
  nome: string = 'Mattia';
  eta: number = 30;
  isStudente: boolean = true;

  persona: Persona = {
    nome: 'Luca',
    cognome: 'Rossi',
    eta: 25
  };

  mostraInfo(): string {
    return `${this.persona.nome} ${this.persona.cognome} ha ${this.persona.eta} anni.`;
  }
}

interface Persona {
  nome: string;
  cognome: string;
  eta: number;
}
