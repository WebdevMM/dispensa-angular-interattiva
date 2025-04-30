import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations'; // Questa è la riga aggiunta per le animazioni

import { IntroduzioneComponent } from '../sezioni/introduzione/introduzione.component';
import { TypescriptComponent } from '../sezioni/typescript/typescript.component';
import { ComponentiComponent } from '../sezioni/componenti/componenti.component';
import { ServiziComponent } from '../sezioni/servizi/servizi.component';
import { RoutingComponent } from '../sezioni/routing/routing.component';
import { FormsComponent } from '../sezioni/forms/forms.component';
import { RxjsComponent } from '../sezioni/rxjs/rxjs.component';
import { TodoComponent } from '../sezioni/todo/todo.component';
import { BlogComponent } from '../sezioni/blog/blog.component';
import { RipassoComponent } from '../sezioni/ripasso/ripasso.component';

@Component({
  selector: 'app-dispensa',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IntroduzioneComponent,
    TypescriptComponent,
    ComponentiComponent,
    ServiziComponent,
    RoutingComponent,
    FormsComponent,
    RxjsComponent,
    TodoComponent,
    BlogComponent,
    RipassoComponent,
  ],
  templateUrl: './dispensa.component.html',
  styleUrls: ['./dispensa.component.css'],
  animations: [ // Questa è la sezione aggiunta per definire le animazioni
    trigger('cardAnimation', [
      state('void', style({ opacity: 0, transform: 'translateX(-20px) rotate(-5deg)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0) rotate(0deg)' })),
      transition('void => *', animate('400ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('* => void', animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(20px) rotate(5deg)' })))
    ])
  ]
})
export class DispensaComponent {
  sezioni = [
    { titolo: '1. Introduzione & Setup Ambiente', id: 'introduzione' },
    { titolo: '2. TypeScript: Fondamenta per Angular', id: 'typescript' },
    { titolo: '3. Componenti, Template & Data Binding', id: 'componenti' },
    { titolo: '4. Servizi e Dependency Injection', id: 'servizi' },
    { titolo: '5. Routing e Navigazione', id: 'routing' },
    { titolo: '6. Forms Template-Driven', id: 'forms' },
    { titolo: '7. RxJS & Observable', id: 'rxjs' },
    { titolo: '8. Mini-Progetto 1: Todo List', id: 'todo' },
    { titolo: '9. Mini-Progetto 2: Blog Reader', id: 'blog' },
    { titolo: '10. Ripasso Finale & Mock Test', id: 'ripasso' }
  ];

  sezioneVisibile: string | null = null;

  mostraSezione(idSezione: string) {
    console.log('Hai cliccato su:', idSezione);
    this.sezioneVisibile = idSezione;
    console.log('sezioneVisibile ora è:', this.sezioneVisibile);
  }
}