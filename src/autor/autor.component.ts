import { Component } from '@angular/core';

@Component(
  {
    selector: 'autor',
    template: `
      <label>Autor: {{nomeAutor}}</label>
      <br>
      <label>Data de Nascimento: {{dataNascimento}}</label>
    `
  }
)
export class AutorComponent {
  nomeAutor: string;
  dataNascimento: number;

  constructor() {
    this.nomeAutor = 'Lilly Wachowski';
    this.dataNascimento = 1967;
  }
}