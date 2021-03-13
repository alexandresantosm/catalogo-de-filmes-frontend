import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmeComponent } from 'src/filme/filme.component';
import { AutorComponent } from 'src/autor/autor.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    AutorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
