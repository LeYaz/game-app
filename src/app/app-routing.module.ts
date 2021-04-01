import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CategorieComponent } from './categorie/categorie.component';
import { CompteComponent } from './compte/compte.component';
import { ForgetPasswordComponent } from './compte/forget-password/forget-password.component';
import { CreateJeuComponent } from './create-jeu/create-jeu.component';
import { HomeComponent } from './home/home.component';
import { JeuAlbumComponent } from './jeu-album/jeu-album.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { SouscategorieComponent } from './souscategorie/souscategorie.component';


const routes: Routes = [
  // { path:'categorie', component: CategorieComponent},
  // { path: 'souscategorie/:id', component: SouscategorieComponent},
  { path: 'jeuAlbum/:id', component: JeuAlbumComponent},
  { path: 'creerjeu', component: CreateJeuComponent, canActivate: [AuthGuard]},
  { path: 'compte', component: CompteComponent},
  { path: 'changermotdepasse', component : ForgetPasswordComponent},
  { path: 'quiz', component: QuizListComponent},
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
