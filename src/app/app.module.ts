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

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    AutorComponent,
    CadastrarFilmeComponent,
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
