import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tarefas: string[] = 

  ];

  novaTarefa: string = '';
  constructor() { }

  cadastrarTarefa() {
    this.tarefas.push(this.novaTarefa);
    this.novaTarefa = '';

  }
  removerTarefa(posicao) {
    this.tarefas.splice(posicao, 1);
  }
}