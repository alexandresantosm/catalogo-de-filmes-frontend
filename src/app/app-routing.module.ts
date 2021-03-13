import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmeComponent } from 'src/filme/filme.component';
import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component';
import { ConsultarFilmeComponent } from './consultar-filme/consultar-filme.component';
import { Error404Component } from './error404/error404.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { StaticComponentComponent } from './static-component/static-component.component';


const routes: Routes = [
  {
    path: "", component: StaticComponentComponent
  },
  {
    path: "primeiro-componente", component: PrimeiroComponenteComponent
  },
  {
    path: "segundo-componente", component: SegundoComponenteComponent
  },
  {
    path: "cadastrar-filme", component: CadastrarFilmeComponent
  },
  {
    path: "consultar-filme", component: ConsultarFilmeComponent
  },
  {
    path: "**", component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
