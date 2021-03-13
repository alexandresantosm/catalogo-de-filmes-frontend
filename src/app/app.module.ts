import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmeComponent } from 'src/filme/filme.component';
import { AutorComponent } from 'src/autor/autor.component';
import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component';
import { FilmeService } from './cadastrar-filme/filme.service';
import { ConsultarFilmeComponent } from './consultar-filme/consultar-filme.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { Error404Component } from './error404/error404.component';
import { StaticComponentComponent } from './static-component/static-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    AutorComponent,
    CadastrarFilmeComponent,
    ConsultarFilmeComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    Error404Component,
    StaticComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
