import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Filme } from './filme.model';

@Injectable()
export class FilmeService {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  cadastrarFilme(filme: Filme) {
    return this.httpClient.post('http://localhost:8080/CatalogoDeFilmes/persistir-filme', filme);
  }
}