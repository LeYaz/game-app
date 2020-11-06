import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { JeuAlbumComponent } from './jeu-album/jeu-album.component';
import { SouscategorieComponent } from './souscategorie/souscategorie.component';


const routes: Routes = [
  { path:'categorie', component: CategorieComponent},
  { path: 'souscategorie/:id', component: SouscategorieComponent},
  { path: 'jeuAlbum/:id', component: JeuAlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
