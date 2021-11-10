import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'pokemons',
    component:PokemonComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
