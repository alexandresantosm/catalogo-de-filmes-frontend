import { Component, OnInit } from '@angular/core';
import { Filme } from '../cadastrar-filme/filme.model';
import { FilmeService } from '../cadastrar-filme/filme.service';

@Component({
  selector: 'app-consultar-filme',
  templateUrl: './consultar-filme.component.html',
  styleUrls: ['./consultar-filme.component.css']
})
export class ConsultarFilmeComponent implements OnInit {
  filmeService: FilmeService;
  filme: Filme;

  constructor(filmeService: FilmeService) {
    this.filmeService = filmeService;
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    const id = form.value.id;

    if (id === '') {
      window.alert('Please enter with ID valid!');
      return;
    }

    this.filmeService.consultarFilme(id).subscribe(data => {
      this.filme = data;
    });
  }
}
